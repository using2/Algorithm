const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = Number(input[0]);
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);
  dp[1][1] = 1;
  for (let i = 2; i <= n; i++) {
     dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
     dp[i][1] = BigInt(dp[i - 1][0]);
  }
  console.log(BigInt(dp[n][0] + dp[n][1]).toString());
});
