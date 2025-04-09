const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = [];

function hanoiTop(n, from, to) {
  if (n === 1) {
    ans.push(`${from} ${to}`);
    return;
  }
  let via = 6 - from - to;
  hanoiTop(n - 1, from, via);
  ans.push(`${from} ${to}`);
  hanoiTop(n - 1, via, to);
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
  const n = parseInt(input[0]);

  hanoiTop(n, 1, 3);

  console.log(ans.length);
  console.log(ans.join('\n'));
});
