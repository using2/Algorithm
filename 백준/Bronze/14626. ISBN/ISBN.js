const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s = '';

rl.on('line', line => {
  s = line.trim();
}).on('close', () => {
  let sum = 0;
  let idx = -1;

  for (let i = 0; i < 13; i++) {
    if (s[i] === '*') {
      idx = i;
      continue;
    }
    const v = Number(s[i]);
    sum += (i % 2 === 0 ? v : v * 3);
  }

  for (let x = 0; x <= 9; x++) {
    let total = sum + (idx % 2 === 0 ? x : x * 3);
    if (total % 10 === 0) {
      console.log(x);
      break;
    }
  }
});
