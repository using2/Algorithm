const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => input.push(line)).on('close', () => {
  let num = 0;
  if (!isNaN(parseInt(input[0]))) {
    num = parseInt(input[0]) + 3;
  } else if (!isNaN(parseInt(input[1]))) {
    num = parseInt(input[1]) + 2;
  } else if (!isNaN(parseInt(input[2]))) {
    num = parseInt(input[2]) + 1;
  }

  let ans = num % 15 === 0 ? 'FizzBuzz' :
      num % 5 === 0        ? 'Buzz' :
      num % 3 === 0        ? 'Fizz' :
                             num;

  console.log(ans);
})
