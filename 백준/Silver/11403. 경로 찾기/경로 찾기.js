const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function floydWarshall(graph, N) {
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = 1;
        }
      }
    }
  }
  return graph;
}

function processGraphInput(input) {
  const N = parseInt(input[0], 10);
  let graph = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
  graph = floydWarshall(graph, N);
  graph.forEach(row => console.log(row.join(' ')));
}

let input = [];

rl.on('line', (line) => input.push(line.trim())).on('close', () => {
  processGraphInput(input);
});
