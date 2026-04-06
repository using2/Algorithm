const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const N = Number(input[0]);

  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array(N + 1).fill(0);
  const buildTime = Array(N + 1).fill(0);
  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    const arr = input[i].split(" ").map(Number);
    buildTime[i] = arr[0];

    for (let j = 1; j < arr.length - 1; j++) {
      const pre = arr[j];
      graph[pre].push(i);
      indegree[i]++;
    }
  }

  const queue = [];

  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      dp[i] = buildTime[i];
    }
  }

  let idx = 0;

  while (idx < queue.length) {
    const current = queue[idx++];

    for (let next of graph[current]) {
      dp[next] = Math.max(dp[next], dp[current] + buildTime[next]);
      indegree[next]--;

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(dp.slice(1).join("\n"));
});
