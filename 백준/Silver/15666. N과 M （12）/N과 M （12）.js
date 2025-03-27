const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let [n, m] = input[0];
  let arr = input[1].sort((a, b) => a - b);
  let set = new Set();

  function solution(comb, idx) {
    if (comb.length === m) {
      let sequence = comb.join(' ');
      if(!set.has(sequence)) {
        set.add(sequence);
        console.log(sequence);
      }
      return;
    }

    for (let i = idx; i < n; i++) {
      solution([...comb, arr[i]], i);
    }
  }

  solution([], 0);
});
