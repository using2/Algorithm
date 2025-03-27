const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(e => parseInt(e)));
  }).on('close', () => {
  let [n, m] = input[0];

  function solution(comb, idx, visit) {
    if (comb.length === m) {
      comb.forEach(e => process.stdout.write(e + ' '));
      console.log();
      return;
    }

    for (let i = idx; i <= n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        solution([...comb, i], i, visit);
        visit[i] = false;
      }
    }
  }

  solution([], 1, []);
});
