const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let [n, m] = input.shift(); 

  let arr = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
  let dp = Array.from({length: n + 1}, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      arr[i][j] = input[i - 1][j - 1];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = arr[i][j] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }

  let results = [];

  for (let i = 0; i < m; i++) {
    let [x1, y1, x2, y2] = input[n + i];

    let sum = dp[x2][y2] - (x1 > 1 ? dp[x1 - 1][y2] : 0) -
        (y1 > 1 ? dp[x2][y1 - 1] : 0) +
        (x1 > 1 && y1 > 1 ? dp[x1 - 1][y1 - 1] : 0);

    results.push(sum);
  }

  console.log(results.join('\n'));
});
