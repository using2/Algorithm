const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(n, m, matrix) {
  let dp = Array.from({length: n}, () => Array(m).fill(-Infinity));

  dp[0][0] = matrix[0][0];

  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    let dp1 = new Array(m).fill(-Infinity);
    let dp2 = new Array(m).fill(-Infinity);

    for (let j = 0; j < m; j++) {
      let fromLeft = j > 0 ? dp1[j - 1] : -Infinity;
      let fromTop = dp[i - 1][j];

      dp1[j] = Math.max(fromLeft, fromTop) + matrix[i][j];
    }
    for (let j = m - 1; j >= 0; j--) {
      let fromRight = j < m - 1 ? dp2[j + 1] : -Infinity;
      let fromTop = dp[i - 1][j];

      dp2[j] = Math.max(fromRight, fromTop) + matrix[i][j];
    }
    for (let j = 0; j < m; j++) {
      dp[i][j] = Math.max(dp1[j], dp2[j]);
    }
  }

  console.log(dp[n - 1][m - 1]);
}

readline.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n, m] = input[0];
      let matrix = input.splice(1);
      solution(n, m, matrix);
      process.exit();
    });
