const request = require('request');

var domain = "apis.data.go.kr";
var path = "/1741000/DisasterMsg2/getDisasterMsgList";
var serviceKey = "f0Vm3J7dep224XlSQcaGLq5KsevEg9ROfHsusmq1SGHUX0hMFjOexc0SW%2BjR5XwLpLH0mIhonwPvj9%2Bl0Vmxew%3D%3D";
var params = "numOfRows=10&pageNo=1&type=json&flag=Y"
const uri = "http://" + domain + path + "?" + "serviceKey=" + serviceKey + "&" + params;

request.get(uri, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    // console.log(JSON.parse(body).DisasterMsg[1].row);

    var msgs = JSON.parse(body).DisasterMsg[1].row;
    msgs.forEach(msg => {
        console.log(msg.create_date, ":", msg.location_name, ":", msg.msg.replace(/\n/gi, " "));
    });
    
});
