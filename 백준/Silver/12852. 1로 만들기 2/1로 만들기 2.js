const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
    const n = Number(input[0]);
    const dp = Array(n + 1).fill(0);
    const from = Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        from[i] = i - 1;

        if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
            dp[i] = dp[i / 2] + 1;
            from[i] = i / 2;
        }
        if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
            dp[i] = dp[i / 3] + 1;
            from[i] = i / 3;
        }
    }

    let result = [];
    let x = n;
    while (x > 0) {
        result.push(x);
        x = from[x];
    }

    console.log(dp[n]);
    console.log(result.join(' '));
});
