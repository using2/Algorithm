const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  const graph = Array.from({length: N + 1}, () => []);

  for (let i = 1; i <= M; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    graph[A].push(B);
    graph[B].push(A);
  }

  let minKevinBacon = Infinity;
  let person = -1;

  for (let i = 1; i <= N; i++) {
    let visited = new Array(N + 1).fill(false);
    let queue = [[i, 0]];
    let totalDistance = 0;

    visited[i] = true;

    while (queue.length > 0) {
      let [node, distance] = queue.shift();
      totalDistance += distance;

      for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, distance + 1]);
        }
      }
    }
    
    let kevinBacon = totalDistance;

    if (kevinBacon < minKevinBacon) {
      minKevinBacon = kevinBacon;
      person = i;
    }
  }

  console.log(person);
});