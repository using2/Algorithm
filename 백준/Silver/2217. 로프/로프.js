const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = Number(input[0]);
  const ropes = input.slice(1).map(Number);

  ropes.sort((a, b) => b - a);

  let ans = 0;

  for (let i = 0; i < N; i++) {
    ans = Math.max(ans, ropes[i] * (i + 1));
  }

  console.log(ans);
});
