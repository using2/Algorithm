const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(e => parseInt(e)));
  }).on('close', () => {
  let [m, n] = input[0];
  let grid = input.slice(1);
  let queue = [];
  let totalTomatoes = 0;
  let ripeCount = 0;
  let days = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      } else if (grid[i][j] === 0) {
        totalTomatoes++;
      }
    }
  }

  if (totalTomatoes === 0) {
    console.log(0);
    return;
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    let nextQueue = [];

    for (let [x, y] of queue) {
      for (let d = 0; d < 4; d++) {
        let nx = x + dx[d];
        let ny = y + dy[d];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 0) {
          grid[nx][ny] = 1;
          nextQueue.push([nx, ny]);
          ripeCount++;
        }
      }
    }

    queue = nextQueue;
    days++;
  }

  console.log(ripeCount === totalTomatoes + queue.length ? days : -1);
});
