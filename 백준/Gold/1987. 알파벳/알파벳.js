const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [R, C] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(row => row.split(''));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let max = 0;

  function dfs(x, y, visited, count) {
    max = Math.max(max, count);

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

      const charCode = board[nx][ny].charCodeAt(0) - 65;
      if ((visited & (1 << charCode)) === 0) {
        dfs(nx, ny, visited | (1 << charCode), count + 1);
      }
    }
  }

  const startCharCode = board[0][0].charCodeAt(0) - 65;
  dfs(0, 0, 1 << startCharCode, 1);

  console.log(max);
});
