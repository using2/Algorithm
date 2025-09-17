const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let [N, M, x, y, K] = input[0].split(' ').map(Number);
  let map = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
  let commands = input[N + 1].split(' ').map(Number);

  let dice = Array(7).fill(0);

  const dx = [0, 0, 0, -1, 1];
  const dy = [0, 1, -1, 0, 0];

  function roll(dir) {
    let [top, north, east, west, south, bottom] =
      [dice[1], dice[2], dice[3], dice[4], dice[5], dice[6]];

    if (dir === 1) {
      dice[1] = west;
      dice[3] = top;
      dice[4] = bottom;
      dice[6] = east;
    } else if (dir === 2) { 
      dice[1] = east;
      dice[3] = bottom;
      dice[4] = top;
      dice[6] = west;
    } else if (dir === 3) { 
      dice[1] = south;
      dice[2] = top;
      dice[5] = bottom;
      dice[6] = north;
    } else if (dir === 4) { 
      dice[1] = north;
      dice[2] = bottom;
      dice[5] = top;
      dice[6] = south;
    }
  }

  commands.forEach(cmd => {
    let nx = x + dx[cmd];
    let ny = y + dy[cmd];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) return;

    x = nx; y = ny;
    roll(cmd);

    if (map[x][y] === 0) {
      map[x][y] = dice[6];
    } else {
      dice[6] = map[x][y];
      map[x][y] = 0;
    }

    console.log(dice[1]); 
  });
});
