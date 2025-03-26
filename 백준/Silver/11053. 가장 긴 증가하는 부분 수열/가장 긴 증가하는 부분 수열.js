const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(e => parseInt(e, 10))))
    .on('close', () => {
      let [n] = input[0];
      let arr = input[1];

      let dp =
          new Array(n).fill(1);
      let ans = 1;

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
          if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
          }
        }
        ans = Math.max(ans, dp[i]);
      }

      console.log(ans);
    });
