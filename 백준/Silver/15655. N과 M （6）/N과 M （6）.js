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
  const visit = Array(n).fill(false);
  const set = new Set();

  function solution(depth, idx) {
    let s = [...result].sort((a, b) => a - b).join(' ');
    if (depth === m) {
      if (!set.has(s)) {
        set.add(s);
        output.push(result.join(' '));
      }
      return;
    }

    for (let i = idx; i < n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        result[depth] = arr[i];
        solution(depth + 1, idx + 1);
        visit[i] = false;
      }
    }
  }

  solution(0, 0);
  console.log(output.join('\n'));
});
