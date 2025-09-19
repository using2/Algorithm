const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [N, M] = input[0].split(' ').map(Number);
  let arr = input.slice(1).map(line => line.split(' ').map(Number));

  function melt() {
    let minus = Array.from({length: N}, () => Array(M).fill(0));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] > 0) {
          for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            let nx = i + dx, ny = j + dy;
            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
              if (arr[nx][ny] === 0) minus[i][j]++;
            }
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        arr[i][j] = Math.max(0, arr[i][j] - minus[i][j]);
      }
    }
  }

  function isTwo() {
    let visited = Array.from({length: N}, () => Array(M).fill(false));
    let count = 0;

    function dfs(x, y) {
      let stack = [[x, y]];
      visited[x][y] = true;
      while (stack.length) {
        let [cx, cy] = stack.pop();
        for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
          let nx = cx + dx, ny = cy + dy;
          if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (!visited[nx][ny] && arr[nx][ny] > 0) {
              visited[nx][ny] = true;
              stack.push([nx, ny]);
            }
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!visited[i][j] && arr[i][j] > 0) {
          count++;
          dfs(i, j);
        }
      }
    }

    return count >= 2;
  }

  function isAllMelt() {
    return arr.every(row => row.every(cell => cell === 0));
  }

  let answer = 0;
  while (!isAllMelt() && !isTwo()) {
    answer++;
    melt();
  }

  if (isAllMelt())
    console.log(0);
  else
    console.log(answer);
});
