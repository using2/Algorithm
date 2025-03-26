const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let ans = 0;
  let [n, i, j] = input[0];

  while (n !== 0) {
    n -= 1;

    if (i < Math.pow(2, n) && j < Math.pow(2, n)) {
      ans += Math.pow(2, n) * Math.pow(2, n) * 0;
    } else if (i < Math.pow(2, n)&& j >= Math.pow(2, n)) {
      ans += Math.pow(2, n) * Math.pow(2, n) * 1;
      j -= Math.pow(2, n);
    } else if (i >= Math.pow(2, n) && j < Math.pow(2, n)) {
      ans += Math.pow(2, n) * Math.pow(2, n) * 2;
      i -= Math.pow(2, n);
    } else {
      ans += Math.pow(2, n) * Math.pow(2, n) * 3;
      j -= Math.pow(2, n);
      i -= Math.pow(2, n);
    }
  }

  console.log(ans);
});
