const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [n, s] = input[0].split(" ").map(e => parseInt(e));
  const arr = input[1].split(" ").map(e => parseInt(e));

  let ans = 0;

  function comb(sum, count, visit, now) {
    if(sum === s && count > 0) ans++;

    for(let i = now; i < n; i++) {
      if(!visit[i]) {
        visit[i] = true;
        comb(sum + arr[i], count + 1, visit, i + 1);
        visit[i] = false;
      }
    }
  }

  let visit = Array(n).fill(false);

  comb(0, 0, visit, 0);

  console.log(ans);

});
