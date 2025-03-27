const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let [n, m] = input[0];
  let arr = input[1].sort((a, b) => a - b);
  let visited = new Array(n).fill(false);
  let result = new Set();

  function solution(comb) {
    if (comb.length === m) {
      let sequence = comb.join(' ');
      if (!result.has(sequence)) {
        result.add(sequence);
        console.log(sequence);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        solution([...comb, arr[i]]);
        visited[i] = false;
      }
    }
  }

  solution([]);
});
