const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  let N = parseInt(input[0]);
  let maze = input.slice(1).map((row) => row.split('').map(Number));

  let directions = [
    [-1, 0],  // 위
    [1, 0],   // 아래
    [0, -1],  // 왼쪽
    [0, 1],   // 오른쪽
  ];

  let visited = Array.from({length: N}, () => Array(N).fill(false));
  let ans = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maze[i][j] === 0 || visited[i][j]) continue;
      let queue = [[i, j]];
      visited[i][j] = true;

      let cnt = 0;
      while (queue.length) {
        cnt++;
        let [x, y] = queue.shift();

        for (let [dx, dy] of directions) {
          let nx = x + dx;
          let ny = y + dy;

          if (nx >= 0 && ny >= 0 && nx < N && ny < N && maze[nx][ny] === 1 &&
              !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
      ans.push(cnt);
    }
  }

  console.log(ans.length);
  console.log(ans.sort((a, b) => a - b).join('\n'));
});
