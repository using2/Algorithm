const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = parseInt(input[0]);
  let answer = 0;

  let col = Array(N).fill(false);
  let diag1 = Array(2 * N).fill(false);
  let diag2 = Array(2 * N).fill(false);

  function dfs(row) {
    if (row === N) {
      answer++;
      return;
    }
    for (let c = 0; c < N; c++) {
      if (!col[c] && !diag1[row + c] && !diag2[row - c + N]) {
        col[c] = diag1[row + c] = diag2[row - c + N] = true;
        dfs(row + 1);
        col[c] = diag1[row + c] = diag2[row - c + N] = false;
      }
    }
  }

  dfs(0);
  console.log(answer);
});
