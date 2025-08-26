const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let n = parseInt(input[0]);
  let arr = input.splice(1).map(e => e.split(" ").map(Number));
  let visit = new Array(n).fill(false);

  let dif = Infinity;

  function add(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i !== j) sum += arr[team[i]][team[j]];
      }
    }
    return sum;
  }

  function comb(count, now) {
    if (count === n / 2) {
      let start = [];
      let link = [];
      for (let i = 0; i < n; i++) {
        if (visit[i]) start.push(i);
        else link.push(i);
      }
      let sumStart = add(start);
      let sumLink = add(link);
      dif = Math.min(dif, Math.abs(sumStart - sumLink));
      return;
    }

    for (let i = now; i < n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        comb(count + 1, i + 1);
        visit[i] = false;
      }
    }
  }

  comb(0, 0);

  console.log(dif);
});
