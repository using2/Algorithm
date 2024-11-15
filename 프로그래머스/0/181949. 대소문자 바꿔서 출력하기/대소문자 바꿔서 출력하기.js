const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const ans = str.split('')
              .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
              .join('');
    console.log(ans);
});