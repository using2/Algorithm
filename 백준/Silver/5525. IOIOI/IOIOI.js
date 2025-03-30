const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
  let n = parseInt(input[0]);
  let length = parseInt(input[1]);
  let str = input[2];

  let count = 0;
  let i = 0;

  while (i < length - 2) {
    if (str[i] === 'I') {
      let matchCount = 0;
      while (i + 1 < length && str[i + 1] === 'O' && i + 2 < length && str[i + 2] === 'I') {
        matchCount++;
        if (matchCount === n) {
          count++;
          matchCount--;
        }
        i += 2;
      }
    }
    i++;
  }

  console.log(count);
});