const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [N, L, R] = input[0].split(' ').map(e => parseInt(e));
  let arr = [];

  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(e => parseInt(e)));
  }

  let answer = 0;
  let visit = [];

  function move(countrys) {
    let sum = countrys.reduce((cur, acc) => {
      return arr[cur[0]][cur[1]] + acc;
    }, 0);

    countrys.forEach(e => {
      arr[e[0]][e[1]] = Math.floor(sum / countrys.length);
    });
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function calOpenCountrys(i, j, countrys) {
    if (i < 0 || i >= N || j < 0 || j >= N || visit[i][j]) return countrys;

    visit[i][j] = true;
    countrys.push([i, j]);

    for (let [dx, dy] of directions) {
      let ni = i + dx, nj = j + dy;
      if (ni >= 0 && ni < N && nj >= 0 && nj < N && !visit[ni][nj]) {
        let diff = Math.abs(arr[i][j] - arr[ni][nj]);
        if (diff >= L && diff <= R) {
          calOpenCountrys(ni, nj, countrys);
        }
      }
    }

    return countrys;
  }

  function move(countrys) {
    let sum = countrys.reduce((acc, cur) => acc + arr[cur[0]][cur[1]], 0);
    let avg = Math.floor(sum / countrys.length);
    countrys.forEach(([x, y]) => arr[x][y] = avg);
  }

  function countDays() {
    visit = Array.from({length: N}, () => new Array(N).fill(false));
    let list = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visit[i][j]) {
          let c = calOpenCountrys(i, j, []);
          if (c.length > 1) list.push(c);
        }
      }
    }

    if (list.length > 0) {
      list.forEach(move);
      return true;
    }
    return false;
  }

  while (countDays()) answer++;

  console.log(answer);
});
