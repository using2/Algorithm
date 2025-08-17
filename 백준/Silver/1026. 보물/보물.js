const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let a = input[1].split(" ").map(e => parseInt(e)).sort((a, b) => a - b);
  let b = input[2].split(" ").map(e => parseInt(e)).sort((a, b) => b - a);

  let ans = 0;

  for(let i = 0; i < a.length; i++) {
    ans += a[i] * b[i];
  }
  
  console.log(ans);
});
