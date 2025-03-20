const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(map) {
  let visit = new Set();
  let queue = [[1, 0]];

  while (queue.length) {
    let [cur, move] = queue.shift();

    if (cur === 100) return move;

    for (let next of [cur + 1, cur + 2, cur + 3, cur + 4, cur + 5, cur + 6]) {
      if (next <= 100 && !visit.has(next)) {
        visit.add(next);

        if (map[next] !== 0) {
          queue.push([map[next], move + 1]);
        } else {
          queue.push([next, move + 1]);
        }
      }
    }
  }
}


readline.on('line', (line) => input.push(line.split(' ').map(e => parseInt(e))))
    .on('close', () => {
      let map = new Array(101).fill(0);

      for (let i = 1; i < input.length; i++) {
        let [from, to] = input[i];
        map[from] = to;
      }

      console.log(solution(map));
      process.exit();
    });
