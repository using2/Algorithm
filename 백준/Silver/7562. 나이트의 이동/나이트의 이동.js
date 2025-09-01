const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let t = parseInt(input[0]); 
  let idx = 1;

  const moves = [
    [-2, -1], [-1, -2], [1, -2], [2, -1],
    [2, 1], [1, 2], [-1, 2], [-2, 1]
  ];

  const bfs = (l, start, target) => {
    const visited = Array.from({ length: l }, () => Array(l).fill(false));
    const queue = [];
    queue.push([...start, 0]);
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();

      if (x === target[0] && y === target[1]) {
        return dist;
      }

      for (const [dx, dy] of moves) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
  };

  for (let i = 0; i < t; i++) {
    const l = parseInt(input[idx++]);
    const start = input[idx++].split(' ').map(Number);
    const target = input[idx++].split(' ').map(Number);

    console.log(bfs(l, start, target));
  }
});
