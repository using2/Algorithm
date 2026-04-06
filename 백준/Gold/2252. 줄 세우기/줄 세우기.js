const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let [N, M] = input[0].split(" ").map(Number);
  let graph = Array.from({ length: N + 1 }, () => []);
  let indegree = Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    indegree[b]++;
  }

  let queue = [];
  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let result = [];
  let start = 0;
  while (queue.length > start) {
    let node = queue[start++];
    result.push(node);

    for (let neighbor of graph[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  console.log(result.join(" "));

  rl.close();
});
