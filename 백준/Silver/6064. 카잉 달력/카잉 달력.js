const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findYear(M, N, x, y) {
  let k = x;
  while (k <= M * N) {
    if ((k - 1) % N + 1 === y) {
      return k;
    }
    k += M;
  }
  return -1;
}

function processInput(input) {
  const T = parseInt(input[0], 10);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const [M, N, x, y] = input[i].split(' ').map(Number);
    results.push(findYear(M, N, x, y));
  }

  console.log(results.join('\n'));
}

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  processInput(input);
});