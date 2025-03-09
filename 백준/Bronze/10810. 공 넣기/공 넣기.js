const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function solution(바구니수, n, 방법들) {
    let 바구니 = new Array(바구니수).fill(0);

    for(let i = 0; i < n; i++) {
        let start = 방법들[i][0];
        let end = 방법들[i][1];
        let num = 방법들[i][2];

        바구니.fill(num, start - 1, end);
    }

    바구니.forEach((e) => process.stdout.write(e + " "));
}

readline.on('line', function(line) {
    input.push(line.split(' ').map(e => parseInt(e)));
}).on('close', function() {
    let [n, m] = input[0];
    let 방법들 = input.slice(1);
    solution(n, m, 방법들);
    process.exit();
})