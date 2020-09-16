const http = require('http');

console.log('hi my node.js projectno');
const serviceKey = 'UQ0a7lXk%2F5lEII5Fwm9IhRdWKPvPhziMnT6fUWsN3QShL48O8DPCicXbKFakaYWOV83PGJ4mCoukl9AF9yrLMA%3D%3D';

function getDisasterMsgList(pageNo, numOfRows) {
    var type = 'xml';
    var flag = 'Y';

    var options = {
        host: 'apis.data.go.kr',
        path: `/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=${serviceKey}&type=${type}&pageNo=${pageNo}&numOfRows=${numOfRows}&flag=${flag}`
    };

    http.request(options, function(response) {
        handleDisaterMsgList(response);
    }).end();
}

function handleDisaterMsgList(response) {
    var disaterMsgList = '';
    
    response.on('data', function (chunck) {
        disaterMsgList += chunck;
    });
    
    response.on('end', function () {
        console.log(disaterMsgList);
    });
}

getDisasterMsgList(1, 10);