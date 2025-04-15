const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  const [n, m] = input[0];
  const result = [];
  const output = [];

  function solution(depth) {
    if (depth === m) {
      output.push(result.join(' '));
      return;
    }

    for (let i = 1; i <= n; i++) {
      result[depth] = i;
      solution(depth + 1);
    }
  }

  solution(0);
  console.log(output.join('\n'));
});
