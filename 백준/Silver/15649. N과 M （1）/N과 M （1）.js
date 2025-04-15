const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  const [n, m] = input[0];
  const visit = new Array(n + 1).fill(false);
  const comb = [];

  function solution(depth) {
    if (depth === m) {
      console.log(comb.join(' '));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        comb.push(i);
        solution(depth + 1);
        comb.pop();
        visit[i] = false;
      }
    }
  }

  solution(0);
});
