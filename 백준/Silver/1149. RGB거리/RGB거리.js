const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
}).on('close', () => {
    let n = input[0][0];
    let cost = input.slice(1);

    let dp = Array.from({ length: n }, () => Array(3).fill(0));

    dp[0][0] = cost[0][0];
    dp[0][1] = cost[0][1];
    dp[0][2] = cost[0][2];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
    }

    console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
});
