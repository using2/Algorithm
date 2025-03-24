const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

function solution(n, m, input) {
  let start = [];
  let map = [];
  let visit = Array.from(new Array(n), () => new Array(m).fill(-1));

  input.forEach((row, i) => {
    map[i] = row;
    row.forEach((cell, j) => {
      if(cell === 0) visit[i][j] = 0;
      if (cell === 2) start = [i, j];
    });
  });

  let queue = [start];
  visit[start[0]][start[1]] = 0;

  const directions = [
    [-1, 0],  // 상
    [1, 0],   // 하
    [0, -1],  // 좌
    [0, 1],   // 우
  ];

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    let dist = visit[x][y];

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && map[nx][ny] === 1 &&
          visit[nx][ny] === -1) {
        visit[nx][ny] = dist + 1;
        queue.push([nx, ny]);
      }
    }
  }

  visit.forEach(row => {console.log(row.join(' '))});
}

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n, m] = input[0];
      let map = [];
      let start = [];

      input.splice(0, 1);

      solution(n, m, input);
    });
