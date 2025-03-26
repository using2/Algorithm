const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
  let groups = input[0].split('-').map(
      group => group.split('+').map(Number).reduce((a, b) => a + b));

  let ans = groups[0];
  for (let i = 1; i < groups.length; i++) {
    ans -= groups[i];
  }

  console.log(ans);
});
