const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(...line.split(' ').map(Number));
}).on('close', () => {
  const [n, m] = input.slice(0, 2);
  const nums = input.slice(2).sort((a, b) => a - b);
  const result = [];
  const output = [];

  function dfs(depth, idx) {
    if (depth === m) {
      output.push(result.join(' '));
      return;
    }

    for (let i = idx; i < n; i++) {
      result[depth] = nums[i];
      dfs(depth + 1, i);
    }
  }

  dfs(0, 0);
  console.log(output.join('\n'));
});
