const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  const nums = input[1].split(" ").map(Number);
  const opers = input[2].split(" ").map(Number);

  let maxVal = -Infinity;
  let minVal = Infinity;

  function dfs(idx, current, plus, minus, mul, div) {
    if (idx === n) {
      maxVal = Math.max(maxVal, current);
      minVal = Math.min(minVal, current);
      return;
    }

    if (plus > 0) dfs(idx + 1, current + nums[idx], plus - 1, minus, mul, div);
    if (minus > 0) dfs(idx + 1, current - nums[idx], plus, minus - 1, mul, div);
    if (mul > 0) dfs(idx + 1, current * nums[idx], plus, minus, mul - 1, div);
    if (div > 0) {
      let val = current < 0 ? -Math.floor(-current / nums[idx]) : Math.floor(current / nums[idx]);
      dfs(idx + 1, val, plus, minus, mul, div - 1);
    }
  }

  dfs(1, nums[0], opers[0], opers[1], opers[2], opers[3]);

  console.log(maxVal.toString());
  console.log(minVal.toString());
});
