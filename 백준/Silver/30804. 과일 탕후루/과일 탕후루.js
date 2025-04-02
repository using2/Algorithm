const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n] = input[0];
      let [left, right] = [0, 0];
      let 종류 = {};
      let 수 = [];
      let maxLength = 0;

      while (right < n) {
        let cur = input[1][right];

        종류[cur] = (종류[cur] || 0) + 1;
        수.push(cur);
        right++;

        while (Object.keys(종류).length > 2) {
          let removeNum = 수.shift();
          종류[removeNum] -= 1;
          if (종류[removeNum] === 0) delete 종류[removeNum];
          left++;
        }

        maxLength = Math.max(maxLength, right - left);
      }

      console.log(maxLength);
    });
