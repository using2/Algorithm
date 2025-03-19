const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(top) {
  let stack = [];
  let answer = [];

  top.forEach((height, idx) => {
    while (stack.length > 0 && stack[stack.length - 1].height < height) {
      stack.pop();
    }
    if (stack.length > 0) {
      answer.push(stack[stack.length - 1].idx + 1);
    } else {
      answer.push(0);
    }
    stack.push({height, idx});
  });

  console.log(answer.join(' '));
}

readline.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      solution(input[1]);
      process.exit();
    });
