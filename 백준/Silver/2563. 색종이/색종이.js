const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const n = Number(input[0]);
  const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    for (let dx = 0; dx < 10; dx++) {
      for (let dy = 0; dy < 10; dy++) {
        paper[x + dx][y + dy] = 1;
      }
    }
  }

  let area = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (paper[i][j] === 1) area++;
    }
  }

  console.log(area);
});
