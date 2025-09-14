const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let K = parseInt(input[0]);
  let idx = 1;

  function bipartiteGraph(V, edges) {
    let graph = Array.from({ length: V + 1 }, () => []);
    for (let [v1, v2] of edges) {
      graph[v1].push(v2);
      graph[v2].push(v1);
    }

    let color = new Array(V + 1).fill(0); 

    function bfs(start) {
      let queue = [start];
      color[start] = 1;

      while (queue.length > 0) {
        let node = queue.shift();
        for (let next of graph[node]) {
          if (color[next] === 0) {
            color[next] = -color[node]; 
            queue.push(next);
          } else if (color[next] === color[node]) {
            return false;
          }
        }
      }
      return true;
    }

    for (let i = 1; i <= V; i++) {
      if (color[i] === 0) {
        if (!bfs(i)) return false;
      }
    }
    return true;
  }

  for (let i = 0; i < K; i++) {
    let [V, E] = input[idx].split(' ').map(Number);
    let edges = [];
    for (let j = 1; j <= E; j++) {
      let [v1, v2] = input[idx + j].split(' ').map(Number);
      edges.push([v1, v2]);
    }
    console.log(bipartiteGraph(V, edges) ? "YES" : "NO");
    idx += 1 + E;
  }
});
