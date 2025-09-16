const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [n, k] = input[0].split(' ').map(e => parseInt(e));
  let coins = [];

  for (let i = 1; i <= n; i++) {
    coins.push(parseInt(input[i]));
  }

  let dp = Array(k + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= k; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  console.log(dp[k] === Infinity ? -1 : dp[k]);
});
