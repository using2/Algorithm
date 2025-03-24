const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => input.push(line.split(" ").map(e => parseInt(e)))).on('close', () => {
  let [n] = input[0];
  let [t, p] = input[2];
  let ansT = 0;
  let ansP = [0, 0];
  input[1].forEach(e => {
    ansT += Math.ceil(e / t);
  });

  ansP[0] = Math.floor(n / p);
  ansP[1] = n % p;

  console.log(ansT);
  console.log(ansP[0] + ' ' + ansP[1]);
});
