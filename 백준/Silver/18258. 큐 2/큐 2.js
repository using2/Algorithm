const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const n = Number(input[0]);
  const queue = [];
  let head = 0;
  let result = '';

  for (let i = 1; i <= n; i++) {
    const [cmd, val] = input[i].split(' ');

    if (cmd === 'push')
      queue.push(Number(val));
    else if (cmd === 'pop')
      result += (head < queue.length ? queue[head++] : -1) + '\n';
    else if (cmd === 'size')
      result += (queue.length - head) + '\n';
    else if (cmd === 'empty')
      result += (head < queue.length ? 0 : 1) + '\n';
    else if (cmd === 'front')
      result += (head < queue.length ? queue[head] : -1) + '\n';
    else if (cmd === 'back')
      result += (head < queue.length ? queue[queue.length - 1] : -1) + '\n';
  }

  console.log(result.trim());
});
