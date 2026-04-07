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

  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    let arr = input[i].split(" ").map(Number);

    for (let j = 1; j < arr.length - 1; j++) {
      graph[arr[j]].push(arr[j + 1]);
      indegree[arr[j + 1]]++;
    }
  }

  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];
  let start = 0;

  while (start < queue.length) {
    let node = queue[start++];
    result.push(node);

    for (let next of graph[node]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  if (result.length === N) {
    console.log(result.join("\n"));
  } else {
    console.log(0);
  }
});
