const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const [M, N] = input[0].split(' ').map(Number);
  const arr = Array.from({length: M}, () => Array(N).fill(0));
  const visited = Array.from({length: M}, () => Array(N).fill(false));

  for (let i = 0; i < M; i++) {
    arr[i] = input[i + 1].split(' ').map(Number);
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(y, x) {
    let size = 1;
    visited[y][x] = true;

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny >= 0 && nx >= 0 && ny < M && nx < N && !visited[ny][nx] &&
          arr[ny][nx] === 1) {
        size += dfs(ny, nx);
      }
    }
    return size;
  }

  const areas = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && arr[i][j] === 1) {
        const area = dfs(i, j);
        areas.push(area);
      }
    }
  }

  console.log(areas.length);
  console.log(areas.length ? Math.max(...areas) : 0);
});
