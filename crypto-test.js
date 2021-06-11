const moment = require("moment");
const crypto = require("crypto");


console.log(typeof moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"));
console.log(typeof new Date().toISOString());