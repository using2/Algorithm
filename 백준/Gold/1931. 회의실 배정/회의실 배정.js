const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let arr = input.splice(1);

  let a = arr.sort((a, b) => {
    if (a[1] === b[1])
      return a[0] - b[0];
    else
      return a[1] - b[1];
  });

  let ans = 1;
  let end = a[0][1];

  for (let i = 1; i < a.length; i++) {
    if (end <= a[i][0]) {
      end = a[i][1];
      ans++;
    }
  }
  console.log(ans);
});
