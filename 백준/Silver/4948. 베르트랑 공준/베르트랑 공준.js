const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MAX = 246912;
const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

// 에라토스테네스의 체
for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

rl.on('line', (line) => {
  const n = parseInt(line);
  if (n === 0) rl.close();
  else {
    let count = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (isPrime[i]) count++;
    }
    console.log(count);
  }
});
