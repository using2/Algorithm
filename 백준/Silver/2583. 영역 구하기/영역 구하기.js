const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const [M, N, K] = input[0].split(' ').map(Number);
  const arr = Array.from({length: M}, () => Array(N).fill(0));
  const visited = Array.from({length: M}, () => Array(N).fill(false));

  for (let i = 1; i <= K; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        arr[y][x] = 1; 
      }
    }
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
          arr[ny][nx] === 0) {
        size += dfs(ny, nx);
      }
    }
    return size;
  }

  const areas = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && arr[i][j] === 0) {
        const area = dfs(i, j);
        areas.push(area);
      }
    }
  }

  areas.sort((a, b) => a - b);
  console.log(areas.length);
  console.log(areas.join(' '));
});
