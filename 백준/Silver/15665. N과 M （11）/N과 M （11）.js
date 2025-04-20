const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(...line.split(' ').map(Number));
}).on('close', () => {
  const [n, m] = input.slice(0, 2);
  const nums = [...new Set(input.slice(2))].sort((a, b) => a - b);
  const result = [];
  const output = [];

  function dfs(depth) {
    if (depth === m) {
      output.push(result.join(' '));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      result[depth] = nums[i];
      dfs(depth + 1);
    }
  }

  dfs(0);
  console.log(output.join('\n'));
});
