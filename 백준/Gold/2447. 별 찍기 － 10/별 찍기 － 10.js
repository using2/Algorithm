const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input[0]);
  const map = Array.from({ length: N }, () => Array(N).fill(' '));

  function fill(x, y, size) {
    if (size === 1) {
      map[y][x] = '*';
      return;
    }

    const step = size / 3;
    for (let dy = 0; dy < 3; dy++) {
      for (let dx = 0; dx < 3; dx++) {
        if (dy === 1 && dx === 1) continue;
        fill(x + dx * step, y + dy * step, step);
      }
    }
  }

  fill(0, 0, N);
  console.log(map.map(row => row.join('')).join('\n'));
});
