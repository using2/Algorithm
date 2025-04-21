const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const n = +input[0];
  const map = input.slice(1).map(line => line.split(' ').map(Number));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  function bfs (x, y, visited, h) {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const nx = cx + dx[d];
        const ny = cy + dy[d];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] &&
            map[nx][ny] > h) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };

  let maxHeight = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] > maxHeight) maxHeight = map[i][j];
    }
  }

  let result = 0;
  for (let h = 0; h <= maxHeight; h++) {
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    let safeZone = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j] && map[i][j] > h) {
          bfs(i, j, visited, h);
          safeZone++;
        }
      }
    }
    if (safeZone > result) result = safeZone;
  }

  console.log(result);
});
