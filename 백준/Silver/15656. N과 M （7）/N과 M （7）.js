const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  const [n, m] = input[0];
  const arr = [...input[1]].sort((a, b) => a - b);
  const result = [];
  const output = [];

  function solution(depth) {
    if (depth === m) {
      output.push(result.join(' '));
      return;
    }

    for (let i = 0; i < n; i++) {
      result[depth] = arr[i];
      solution(depth + 1);
    }
  }

  solution(0);
  console.log(output.join('\n'));
});
