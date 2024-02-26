const os = require("os");


const fileOS = os.userInfo();
console.log(fileOS)
console.log(`The time is ${os.uptime()} seconds`)

const currentOS = {
    names: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(), 
}
console.log(currentOS)