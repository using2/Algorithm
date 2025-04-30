const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = Number(input[0]);
  const distances = input[1].split(' ').map(Number);
  const prices = input[2].split(' ').map(Number);

  let total = 0;
  let minPrice = prices[0];

  for (let i = 0; i < n - 1; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    total += minPrice * distances[i];
  }

  console.log(total);
});
