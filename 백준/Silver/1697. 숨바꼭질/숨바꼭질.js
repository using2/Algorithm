const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

function solution(n, k) {
  if (n === k) return 0;

  let visit = new Set();
  let queue = [];
  let front = 0;

  queue.push([n, 0]);
  visit.add(n);

  while (front < queue.length) {
    let [cur, time] = queue[front++];

    for (let next of [cur * 2, cur - 1, cur + 1]) {
      if (next === k) return time + 1;
      if (next >= 0 && next <= 100000 && !visit.has(next)) {
        visit.add(next);
        queue.push([next, time + 1]);
      }
    }
  }
}

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n, k] = input[0];
      console.log(solution(n, k));
    });
