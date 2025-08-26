const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [n, m] = input[0].split(' ').map(e => parseInt(e));
  let city = input.splice(1).map(e => {
    return e.split(' ').map(a => parseInt(a));
  });
  let home = [];
  let chicken = [];
  let ans = Infinity;

  city.forEach((row, i) => {row.forEach((col, j) => {
                 if (col === 1)
                   home.push([i, j]);
                 else if (col === 2)
                   chicken.push([i, j]);
               })})

  function find(h, chickens) {
    let min = Infinity;

    for (let i = 0; i < chickens.length; i++) {
      let d = Math.abs(h[0] - chickens[i][0]) + Math.abs(h[1] - chickens[i][1]);
      min = Math.min(min, d);
    }

    return min;
  }

  function sum(chickens) {
    let s = 0;

    for (let i = 0; i < home.length; i++) {
      s += find(home[i], chickens);
    }

    return s;
  }

  function comb(visit, count, chickens, now) {
    if(count === m) {
      ans = Math.min(ans, sum(chickens))
      return;
    }

    for(let i = now; i < chicken.length; i++ ){
      if(!visit[i]) {
        visit[i] = true;
        comb(visit, count + 1, [... chickens, chicken[i]], i);
        visit[i] = false;
      }
    }
  }

  comb(new Array(chicken.length).fill(false), 0, [], 0);

  console.log(ans);
});
