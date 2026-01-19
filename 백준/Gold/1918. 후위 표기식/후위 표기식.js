const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expr = '';

rl.on('line', (line) => {
  expr = line.trim();
}).on('close', () => {
  const stack = [];
  let res = '';

  const priority = (op) => {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
  };

  for (const ch of expr) {
    if (ch >= 'A' && ch <= 'Z') {
      res += ch;
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        res += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        priority(stack[stack.length - 1]) >= priority(ch)
      ) {
        res += stack.pop();
      }
      stack.push(ch);
    }
  }

  while (stack.length) {
    res += stack.pop();
  }

  console.log(res);
});
