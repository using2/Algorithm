const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let S = BigInt(input[0]);
  let sum = 0n;
  let i = 1n;
  let count = 0;

  while (sum + i <= S) {
    sum += i;
    i++;
    count++;
  }

  console.log(count);
});
