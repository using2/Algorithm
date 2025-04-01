const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
  let [n, m] = input[0].split(' ').map(Number);
  let camp = Array.from(Array(n), () => Array(m).fill(''));

  let start = null;
  for (let i = 1; i <= n; i++) {
    let row = input[i].split('');
    camp[i - 1] = row;
    for (let j = 0; j < m; j++) {
      if (row[j] === 'I') start = [i - 1, j];
    }
  }

  if (!start) {
    console.log('TT');
    return;
  }

  let queue = [start];
  let visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  let ans = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length) {
    let [i, j] = queue.pop();

    if (camp[i][j] === 'P') ans++;

    for (let [di, dj] of directions) {
      let ni = i + di, nj = j + dj;

      if (ni < 0 || nj < 0 || ni >= n || nj >= m) continue;

      let posKey = `${ni},${nj}`;
      if (!visited.has(posKey) &&
          (camp[ni][nj] === 'O' || camp[ni][nj] === 'P')) {
        queue.push([ni, nj]);
        visited.add(posKey);
      }
    }
  }

  console.log(ans === 0 ? 'TT' : ans);
});
