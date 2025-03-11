const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(n, m, matrix1, matrix2) {
    matrix1.forEach((row, i) => {
        row.forEach((col, j) => {
            process.stdout.write(matrix1[i][j] + matrix2[i][j] + ' ');
        })
        console.log();
    });
}

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(e => parseInt(e)));
}).on('close', function() {
    let [n, m] = input[0];
    let matrix1 = input.slice(1, n + 1);
    let matrix2 = input.slice(n + 1);
    solution(n, m, matrix1, matrix2);
    process.exit();
})
