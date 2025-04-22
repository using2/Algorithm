const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const N = parseInt(input[0]);
    const P = input[1].split(' ').map(Number);
    const dp = Array(N + 1).fill(0);

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + P[j - 1]);
        }
    }

    console.log(dp[N]);
});
