const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => input.push(line)).on('close', () => {
  const N = parseInt(input[0]);
  const 용액 = input[1].split(' ').map(Number);

  let left = 0;
  let right = N - 1;
  let min_sum = Infinity;
  let answer = [];

  while (left < right) {
    let sum = 용액[left] + 용액[right];

    if (Math.abs(sum) < Math.abs(min_sum)) {
      min_sum = sum;
      answer = [용액[left], 용액[right]];
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  console.log(answer[0], answer[1]);
});
