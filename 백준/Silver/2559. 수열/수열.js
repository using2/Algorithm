const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let [n, k] = input[0].split(" ").map(e => parseInt(e));
  let arr = input[1].split(" ").map(e => parseInt(e));

  let max = -Infinity;

  for(let i = k - 1; i < n; i++) {
    let sum = 0;
    for(let j = 0; j < k; j++) {
      sum += arr[i - j];
    }
    max = Math.max(sum, max);
  }

  console.log(max);

});
