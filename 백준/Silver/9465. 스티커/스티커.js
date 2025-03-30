const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
  let T = parseInt(input[0]);
  let index = 1;
  let results = [];

  for (let t = 0; t < T; t++) {
    let n = parseInt(input[index]);
    let stickers = [
      input[index + 1].split(' ').map(Number),
      input[index + 2].split(' ').map(Number),
    ];
    index += 3;

    results.push(maxStickerScore(n, stickers));
  }

  console.log(results.join('\n'));
});

function maxStickerScore(n, stickers) {
  if (n === 1) return Math.max(stickers[0][0], stickers[1][0]);

  let dp = Array.from({length: 2}, () => new Array(n).fill(0));

  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];
  dp[0][1] = stickers[0][1] + stickers[1][0];
  dp[1][1] = stickers[1][1] + stickers[0][0];

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2] || 0) + stickers[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2] || 0) + stickers[1][i];
  }

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
}
