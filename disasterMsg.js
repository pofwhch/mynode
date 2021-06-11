/**
 * @fileoverview 행정안전부에서 제공하는 재난문자방송 발송현황 Open API를 이용하여 발송된 문자 목록을 추출하여 csv file을 생성한다.
 * @requires http - Open API 호출을 위한 http client를 생성하기 위한 모듈
 * @requires xml2js - xml formate으로 제공되는 데이터를 json formate으로 전환하기 위해 사용
 * @requires objects-to-csv - javascript Object를 csv file로 전환하기 위해 사용
 * @author suyong.choi
 */
const http = require('http');
const xml2js = require('xml2js');
const ObjectToCsv = require('objects-to-csv')

const parser = new xml2js.Parser(); 

const serviceKey = 'UQ0a7lXk%2F5lEII5Fwm9IhRdWKPvPhziMnT6fUWsN3QShL48O8DPCicXbKFakaYWOV83PGJ4mCoukl9AF9yrLMA%3D%3D';

/**
 * 재난문자방송 발송현황 Open API를 통해 데이터를 요청한다.
 * @param {number} pageNo - 조회할 데이터의 페이지
 * @param {number} numOfRows - 1 페이지에 출력할 데이터 갯수 
 * @return {void} Nothing
 */
function getDisasterMsgList(pageNo, numOfRows) {
    var type = 'xml';
    var flag = 'Y';

    var options = {
        host: 'apis.data.go.kr',
        path: `/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=${serviceKey}&type=${type}&pageNo=${pageNo}&numOfRows=${numOfRows}&flag=${flag}`
    };

    console.log("[", new Date(), "] 재난문자 API 호출 시작");
    http.request(options, (response) => {
        console.log("[", new Date(), "] 재난문자 API 호출결과 수신 완료");
        handleDisasterMsgList(response);
    }).end();
}

/**
 * HTTP Resonse 를 통해 전달된 데이터를 처리한다.<br>
 * XML 포맷으로 전달된 데이터를 JS Array Object로 전환한다. 
 * @param {HttpResponse} response - Request 요청 결과
 * @return {void} Nothing
 */
function handleDisasterMsgList(response) {
    var disaterMsgList = '';
    
    response.on('data', (chunck) => {
        disaterMsgList += chunck;
    });
    
    response.on('end', () => {
        parser.parseString(disaterMsgList, (err, result) => {
            var rowDatas = result.DisasterMsg.row;
            console.log("[", new Date(), "] 재난문자", rowDatas.length, "건 조회");
            
            var list = new Array();
            var strLocation = '서울특별시';

            // 모든 key의 value 정보가 array로 저장되어 있음
            // 실제 데이터는 1건만 존재
            // csv 파일에 "["aaa"]" 형태로 데이터가 write 되어 실제 값만 write 되도록 처리
            rowDatas.forEach(element => {
                // 특정 지역에 대한 데이터만 저장하고자 할 경우
                if (!element.location_name[0].includes(strLocation)) return;
                
                var item = {
                    md101_sn: element.md101_sn[0],
                    create_date: element.create_date[0],
                    location_id: element.location_id[0],
                    location_name: element.location_name[0],
                    send_platform: element.send_platform[0],
                    msg: element.msg[0]
                };

                list.push(item);
            });
            // for (var row of rowDatas) {
            //     // console.log(row);
            //     // 특정 지역에 대한 데이터만 저장하고자 할 경우
            //     if (!row.location_name[0].includes(strLocation)) continue;
                
            //     var item = {
            //         md101_sn: row.md101_sn[0],
            //         create_date: row.create_date[0],
            //         location_id: row.location_id[0],
            //         location_name: row.location_name[0],
            //         send_platform: row.send_platform[0],
            //         msg: row.msg[0]
            //     };

            //     list.push(item);
            // }

            // csv 파일 생성
            console.log("[", new Date(), "]", strLocation, "지역 재난문자 총", list.length, "건");
            writeCsvFile(list);
        });
    });
}

/**
 * Array Obejct 데이터를 CSV File로 저장한다.
 * @param {Array} list - 재난문자발송 현황 데이터
 * @return {void} Nothing
 */
async function writeCsvFile (list) {
    // set options for using toDisk function
    // append - whether to append to the file.
    // bom - whether to add the Unicode Byte Order Mark at the beginning of the file.
    // allColumns - whether to check all array items for keys to convert to columns rather than only the first.
    var options = {
        append: true,
        bom: true
    }
    console.log("[", new Date(), "] 재난문자 CSV 파일 생성 시작 :", list.length, "건");
    const cvs = new ObjectToCsv(list);
    await cvs.toDisk('./files/disaterMsg.csv', options);
    console.log("[", new Date(), "] 재난문자 CSV 파일 생성 완료 :", list.length, "건");
}

/**
 * 원하는 데이터를 수집하도록 명령
 */
getDisasterMsgList(1, 1000);
// for (let i = 1; i < 11; i++) {
//     setTimeout(() => {
//         console.log(new Date().toUTCString());
//         getDisasterMsgList(i, 1000);
//     }, 1000 * i);
// }
