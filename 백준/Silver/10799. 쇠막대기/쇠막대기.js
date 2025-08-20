const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const str = input[0];
  let stack = [];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (str[i - 1] === "(") {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  }

  console.log(result);
});
