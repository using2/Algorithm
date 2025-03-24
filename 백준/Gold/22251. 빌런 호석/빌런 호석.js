const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./ex.txt")
    .toString();

let [n, k, p, x] = input.split(' ').map(Number);
x = '0'.repeat(k - x.toString().length) + x.toString();

let num = ['1111110', '0000110', '1101101', '1001111', '0010111', '1011011', '1111011', '0001110', '1111111', '1011111'];
let cnt = 0;

function back(depth, res,curnum) {
    if (depth === n.toString().length + 1) {
        if (n >= curnum && curnum !== parseInt(x) && curnum)cnt++;
        return;
    }
    
    let cur = num[parseInt(x[depth - 1])];
    
    for (let i = 0; i < 10; i++){
        let c = 0;
        for (let j = 0; j < 7; j++)
            if (cur[j] !== num[i][j]) c++;
        if (res >= c) {
            back(depth + 1, res-c,curnum*10+i);
        }
    }
}

back(1, p, 0);
console.log(cnt);