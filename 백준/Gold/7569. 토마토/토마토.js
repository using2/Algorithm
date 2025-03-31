const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(e => parseInt(e)));
  }).on('close', () => {
  let [n, m, h] = input[0];
  input.shift();
  let tomato = [];
  let queue = [];
  let prevTomato = 0;
  let check = true;
  for (let x = 0; x < h; x++) {
    let line = Array.from(Array(m), () => Array(n).fill(0));
    for (let y = 0; y < m; y++) {
      for (let z = 0; z < n; z++) {
        line[y][z] = input[y][z];
        if (input[y][z] === 1) {
          queue.push([x, y, z]);
        } else if (input[y][z] === 0) {
          prevTomato += 1;
          check = false;
        }
      }
    }
    tomato.push(line);
    input.splice(0, m);
  }

  if (check) {
    console.log(0);
    return;
  }

  function bfs() {
    let days = -1;

    while (queue.length) {
      let nextQueue = [];

      for (let [x, y, z] of queue) {
        for (let next
                 of [[x - 1, y, z], [x + 1, y, z], [x, y - 1, z], [x, y + 1, z],
                     [x, y, z - 1], [x, y, z + 1]]) {
          if (next[0] < 0 || next[1] < 0 || next[2] < 0 || next[0] >= h ||
              next[1] >= m || next[2] >= n)
            continue;

          if (tomato[next[0]][next[1]][next[2]] === 0) {
            nextQueue.push(next);
            tomato[next[0]][next[1]][next[2]] = 1;
            prevTomato--;
          }
        }
      }

      queue = nextQueue;
      days++;
    }

    return days;
  }

  let ans = bfs();

  if (prevTomato === 0) {
    console.log(ans);
  } else {
    console.log(-1);
  }
});