const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  const n = input[0];
  const wine = input.slice(1);
  const dp = new Array(n).fill(0);

  dp[0] = wine[0];
  if (n > 1) dp[1] = wine[0] + wine[1];
  if (n > 2) dp[2] = Math.max(dp[1], dp[0] + wine[2], wine[1] + wine[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + wine[i],
      dp[i - 3] + wine[i - 1] + wine[i]
    );
  }

  console.log(dp[n - 1]);
});
