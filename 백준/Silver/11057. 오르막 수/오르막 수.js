const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expr = '';

rl.on('line', (line) => {
  expr = line.trim();
}).on('close', () => {
  const N = Number(expr);
  const MOD = 10007;

  let dp = Array(10).fill(1);

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < 10; j++) {
      dp[j] = (dp[j] + dp[j - 1]) % MOD;
    }
  }

  let ans = 0;
  for (let i = 0; i < 10; i++) {
    ans = (ans + dp[i]) % MOD;
  }

  console.log(ans);
});
