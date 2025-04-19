const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(...line.split(' ').map(Number));
}).on('close', () => {
  const [n, m] = input.slice(0, 2);
  const nums = input.slice(2).sort((a, b) => a - b);
  const visited = Array(n).fill(false);
  const result = [];
  const output = [];

  function dfs(depth, start) {
    if (depth === m) {
      output.push(result.join(' '));
      return;
    }

    let prev = -1;
    for (let i = start; i < n; i++) {
      if (visited[i] || nums[i] === prev) continue;
      visited[i] = true;
      result.push(nums[i]);
      dfs(depth + 1, i + 1);
      result.pop();
      visited[i] = false;
      prev = nums[i];
    }
  }

  dfs(0, 0);
  console.log(output.join('\n'));
});
