const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  const N = input[0][0];
  const adj = Array.from({length: N + 1}, () => []);
  const parent = new Array(N + 1).fill(0);

  for (let i = 1; i < N; i++) {
    const [a, b] = input[i];
    adj[a].push(b);
    adj[b].push(a);
  }

  const queue = [1];
  parent[1] = -1;

  while (queue.length) {
    const cur = queue.shift();

    for (const next of adj[cur]) {
      if (parent[next] === 0) {
        parent[next] = cur;
        queue.push(next);
      }
    }
  }

  console.log(parent.slice(2).join('\n'));
});
