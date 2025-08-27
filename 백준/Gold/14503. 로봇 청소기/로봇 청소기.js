const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  const [r, c, d] = input[1].split(' ').map(Number);
  const map = input.slice(2).map(line => line.split(' ').map(Number));

  function solution(N, M, x, y, d, map) {
    let count = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (true) {
      if (map[x][y] === 0) {
        map[x][y] = 2;
        count++;
      }

      let cleaned = false;
      for (let i = 0; i < 4; i++) {
        d = (d + 3) % 4;
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
          x = nx;
          y = ny;
          cleaned = true;
          break;
        }
      }

      if (!cleaned) {
        const back = (d + 2) % 4;
        const nx = x + dx[back];
        const ny = y + dy[back];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] !== 1) {
          x = nx;
          y = ny;
        } else {
          break;
        }
      }
    }

    console.log(count);
  }

  solution(N, M, r, c, d, map);
});
