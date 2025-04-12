const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MOD = 1_000_000_000;

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input[0]);
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j > 0) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= MOD;
    }
  }

  const result = dp[N].reduce((acc, val) => (acc + val) % MOD, 0);
  console.log(result);
});
