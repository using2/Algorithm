const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  const T = +input[0];

  const bfs = (start, target) => {
    const visited = Array(10000).fill(false);
    const queue = [];
    queue.push({ num: start, cmd: '' });
    visited[start] = true;

    while (queue.length) {
      const { num, cmd } = queue.shift();

      if (num === target) return cmd;

      let next;

      next = (num * 2) % 10000;
      if (!visited[next]) {
        visited[next] = true;
        queue.push({ num: next, cmd: cmd + 'D' });
      }

      next = num === 0 ? 9999 : num - 1;
      if (!visited[next]) {
        visited[next] = true;
        queue.push({ num: next, cmd: cmd + 'S' });
      }

      next = (num % 1000) * 10 + Math.floor(num / 1000);
      if (!visited[next]) {
        visited[next] = true;
        queue.push({ num: next, cmd: cmd + 'L' });
      }

      next = (num % 10) * 1000 + Math.floor(num / 10);
      if (!visited[next]) {
        visited[next] = true;
        queue.push({ num: next, cmd: cmd + 'R' });
      }
    }
  };

  for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    console.log(bfs(A, B));
  }
});
