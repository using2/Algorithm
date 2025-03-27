const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  let [a, b] = input[0];
  let ans = 1;

  while (b >= a) {
    if (b === a) {
      console.log(ans);
      return;
    }
    if (Math.floor(b / 2) === b / 2) {
      b /= 2;
      ans++;
    } else if(b % 10 === 1){
      b = Math.floor(b / 10);
      ans++;
    } else {
      console.log(-1);
      return;
    }
  }
  console.log(-1);
});
