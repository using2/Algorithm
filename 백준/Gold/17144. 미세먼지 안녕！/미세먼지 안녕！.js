const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [R, C, T] = input[0].split(' ').map(e => parseInt(e));
  let arr = input.slice(1).map(line => line.split(' ').map(e => parseInt(e)));

  let air = [];
  for (let i = 0; i < R; i++) {
    if (arr[i][0] === -1) {
      air.push(i);
    }
  }
  let [top, bottom] = air;

  function spread() {
    let add = Array.from({length: R}, () => Array(C).fill(0));

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (arr[i][j] > 0) {
          let amount = Math.floor(arr[i][j] / 5);
          let cnt = 0;
          for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            let nx = i + dx, ny = j + dy;
            if (nx >= 0 && nx < R && ny >= 0 && ny < C && arr[nx][ny] !== -1) {
              add[nx][ny] += amount;
              cnt++;
            }
          }
          arr[i][j] -= amount * cnt;
        }
      }
    }

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (arr[i][j] !== -1) arr[i][j] += add[i][j];
      }
    }
  }

  function airClean() {
    for (let i = top - 1; i > 0; i--) arr[i][0] = arr[i - 1][0];
    for (let j = 0; j < C - 1; j++) arr[0][j] = arr[0][j + 1];
    for (let i = 0; i < top; i++) arr[i][C - 1] = arr[i + 1][C - 1];
    for (let j = C - 1; j > 1; j--) arr[top][j] = arr[top][j - 1];
    arr[top][1] = 0;

    for (let i = bottom + 1; i < R - 1; i++) arr[i][0] = arr[i + 1][0];
    for (let j = 0; j < C - 1; j++) arr[R - 1][j] = arr[R - 1][j + 1];
    for (let i = R - 1; i > bottom; i--) arr[i][C - 1] = arr[i - 1][C - 1];
    for (let j = C - 1; j > 1; j--) arr[bottom][j] = arr[bottom][j - 1];
    arr[bottom][1] = 0;
  }

  for (let t = 0; t < T; t++) {
    spread();
    airClean();
  }

  let answer = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] > 0) answer += arr[i][j];
    }
  }
  console.log(answer);
});
