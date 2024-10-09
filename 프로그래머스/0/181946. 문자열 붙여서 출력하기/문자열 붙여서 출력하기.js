const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(input[0]+input[1]);
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
});