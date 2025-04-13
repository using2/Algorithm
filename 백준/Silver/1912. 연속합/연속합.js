const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  let dp = [...arr];
  let max = dp[0];

  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    max = Math.max(max, dp[i]);
  }

  console.log(max);
});
