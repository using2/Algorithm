const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(e => parseInt(e)));
  }).on('close', () => {
  let [n, m] = input[0];
  let arr = input[1].sort((a, b) => a - b);

  function solution(comb, visit) {
    if (comb.length === m) {
      console.log(comb.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        solution([...comb, arr[i]], visit);
        visit[i] = false;
      }
    }
  }

  solution([], []);
});
