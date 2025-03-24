const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

function solution(n, k) {
  if (n === k) return [0, [1]];

  let memo = new Array(100001).fill(0);
  let visit = new Set();
  let queue = [];
  let front = 0;

  queue.push([n, 0]);
  visit.add(n);

  while (front < queue.length) {
    let [cur, time] = queue[front++];

    for (let next of [cur * 2, cur - 1, cur + 1]) {
      if (next < 0 || next > 100000) continue;

      if (next === k) {
        memo[next] = cur;
        return [time + 1, memo];
      }
      if (next >= 0 && next <= 100000 && !visit.has(next)) {
        visit.add(next);
        queue.push([next, time + 1]);
        memo[next] = cur;
      }
    }
  }
}

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n, k] = input[0];
      let [time, memo] = solution(n, k);

      console.log(time);
      let pAns = [];
      while (k !== n) {
        pAns.push(k);
        k = memo[k];
      }
      pAns.push(n);

      console.log(pAns.reverse().join(' '));
    });
