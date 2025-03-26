const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  const T = input[0][0]; 

  for (let i = 1; i <= T; i++) {
    let [x, y] = input[i];
    let d = y - x;
    let k = Math.floor(Math.sqrt(d));

    if (d === k * k) {
      console.log(2 * k - 1);
    } else if (d <= k * k + k) {
      console.log(2 * k);
    } else {
      console.log(2 * k + 1);
    }
  }
});


// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 3
// 5 -> 4
// 6 -> (1, 2, 2, 1) 4
// 7 -> (1, 2, 2, 1, 1) 5
// 8 -> (1, 2, 2, 2, 1) 5
// 9 -> (1, 2, 3, 2, 1) 5
// 10 -> (1, 2, 3, 2, 1, 1) 6