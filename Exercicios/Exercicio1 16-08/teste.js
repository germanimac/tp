const os = require('os');
console.log(os.cpus().length);

const crypto = require('crypto');
const start = Date.now();
    function logHashTime(){
        crypto.pbkdf2('a','b', 100000, 512, 'sha512', function(){
            console.log('hash: ', Date.now()-start);
        });
    }

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
console.log('hello world');