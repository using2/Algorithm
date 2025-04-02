const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  let [N, M] = input[0].split(' ').map(Number);
  let maze = input.slice(1).map((row) => row.split('').map(Number));

  let directions = [
    [-1, 0],  // 위
    [1, 0],   // 아래
    [0, -1],  // 왼쪽
    [0, 1],   // 오른쪽
  ];

  let queue = [[0, 0, 1]]; 
  let visited = Array.from({length: N}, () => Array(M).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    let [x, y, dist] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      console.log(dist);
      return;
    }

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1 &&
          !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
});
