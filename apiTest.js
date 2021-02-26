const request = require('request');
const fs = require('fs');

const jsonFile = fs.readFileSync('sidos.json', 'utf8');

let options = {
    // url: 'https://dc869683fd4b.ngrok.io/corona/munza/info/',
    url: 'https://egw.gbox.kt.com/gw/corona19/munza',
    // url: 'https://egw.gbox.kt.com/gw/corona19/munza/distance',
    method: 'POST',
    json: true,
    headers: {
    //   'Content-Type': 'application/json',
    }
};

const jsonData = JSON.parse(jsonFile);
const sidos = jsonData.sidos;

sidos.forEach(sido => {
    options.body = sido;
    act(options);
});

function act(reqOption) {
    request.post(reqOption, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(body);
        // if 
        console.log(body.sido, " : ", body.sigungu, ":", body.defCntTotal, ":", body.date);
    });
}