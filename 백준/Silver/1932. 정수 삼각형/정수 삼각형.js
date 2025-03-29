const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let n = input[0][0];
  input.shift();

  let dp = [input[0]];

  for (let i = 1; i < n; i++) {
    let curDp = [];
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        curDp.push(dp[i - 1][0] + input[i][j]);
      } else if (j === input[i].length - 1) {
        curDp.push(dp[i - 1][dp[i - 1].length - 1] + input[i][j]);
      } else {
        curDp.push(Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + input[i][j]);
      }
    }
    dp.push(curDp);
  }

  console.log(Math.max(...dp[n - 1]));
});
