const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  let set = new Set();
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    let str = input[i];

    set.add(str);
  }

  for(let i = N + 1; i <= N + M; i++) {
    let str = input[i];

    if(set.has(str)) answer++;
  }

  console.log(answer);
});
