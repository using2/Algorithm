const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const 바퀴들 = [];
  const 바퀴들_시작_인덱스 = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    바퀴들.push(input[i].split('').map(Number));
  }

  const command_cnt = parseInt(input[4]);

  const getRightTooth = (i) => 바퀴들[i][(바퀴들_시작_인덱스[i] + 2) % 8];
  const getLeftTooth = (i) => 바퀴들[i][(바퀴들_시작_인덱스[i] + 6) % 8];

  function 굴러(i, 방향, visited) {
    visited[i] = true;

    if (i > 0 && !visited[i - 1]) {
      if (getLeftTooth(i) !== getRightTooth(i - 1)) {
        굴러(i - 1, -방향, visited);
      }
    }

    if (i < 3 && !visited[i + 1]) {
      if (getRightTooth(i) !== getLeftTooth(i + 1)) {
        굴러(i + 1, -방향, visited);
      }
    }

    if (방향 === 1) {
      바퀴들_시작_인덱스[i] = (바퀴들_시작_인덱스[i] + 7) % 8; 
    } else {
      바퀴들_시작_인덱스[i] = (바퀴들_시작_인덱스[i] + 1) % 8;
    }
  }

  for (let i = 5; i < 5 + command_cnt; i++) {
    let [바퀴, 방향] = input[i].split(' ').map(Number);
    const visited = [false, false, false, false];
    굴러(바퀴 - 1, 방향, visited);
  }

  let ans = 0;
  for (let i = 0; i < 4; i++) {
    if (바퀴들[i][바퀴들_시작_인덱스[i]] === 1) {
      ans += 1 << i; 
    }
  }

  console.log(ans);
});
