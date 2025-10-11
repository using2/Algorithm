const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const n = Number(input[0]);
  const graph = Array.from({length: n + 1}, () => []);

  for (let i = 1; i < n; i++) {
    const [parent, child, weight] = input[i].split(' ').map(Number);
    graph[parent].push([child, weight]);
    graph[child].push([parent, weight]);
  }

  function dfs(start) {
    const visited = Array(n + 1).fill(false);
    const stack = [[start, 0]];
    let farthestNode = start;
    let maxDist = 0;

    while (stack.length) {
      const [node, dist] = stack.pop();
      if (visited[node]) continue;
      visited[node] = true;

      if (dist > maxDist) {
        maxDist = dist;
        farthestNode = node;
      }

      for (const [next, cost] of graph[node]) {
        if (!visited[next]) {
          stack.push([next, dist + cost]);
        }
      }
    }

    return [farthestNode, maxDist];
  }

  const [farthestFromRoot] = dfs(1);

  const [, diameter] = dfs(farthestFromRoot);

  console.log(diameter);
});
