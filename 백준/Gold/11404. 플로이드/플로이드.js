const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const dist = Array.from({length: n + 1}, () => Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) dist[i][i] = 0;

  for (let i = 2; i < 2 + m; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    if (dist[a][b] > c) dist[a][b] = c;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += (dist[i][j] === Infinity ? 0 : dist[i][j]) + ' ';
    }
    result += '\n';
  }

  console.log(result.trim());
});
