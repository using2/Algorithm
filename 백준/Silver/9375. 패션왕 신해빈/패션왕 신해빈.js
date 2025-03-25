const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => input.push(line.split(' '))).on('close', () => {
  let n = parseInt(input[0][0]);
  let index = 1;

  for (let i = 0; i < n; i++) {
    let t = parseInt(input[index][0]);
    let map = {};

    for (let j = 1; j <= t; j++) {
      let [name, type] = input[index + j];
      if (!map[type]) map[type] = 0;
      map[type]++;
    }

    let ans = 1;
    for (let key in map) {
      ans *= (map[key] + 1);
    }

    console.log(ans - 1);

    index += (t + 1);
  }
});
