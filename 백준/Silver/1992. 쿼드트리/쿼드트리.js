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
  const map = input.slice(1).map((line) => line.split('').map(Number));

  function compress(x, y, size) {
    const first = map[x][y];
    let same = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (map[i][j] !== first) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) return String(first);

    const half = size / 2;
    const topLeft = compress(x, y, half);
    const topRight = compress(x, y + half, half);
    const bottomLeft = compress(x + half, y, half);
    const bottomRight = compress(x + half, y + half, half);

    return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
  }

  const result = compress(0, 0, n);
  console.log(result);
});
