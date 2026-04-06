const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let t = Number(input[0]);
  let line = 1;

  while (t--) {
    const n = Number(input[line++]);
    const prev = input[line++].split(" ").map(Number);

    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    const indegree = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        graph[prev[i]][prev[j]] = true;
        indegree[prev[j]]++;
      }
    }

    const m = Number(input[line++]);

    for (let i = 0; i < m; i++) {
      let [a, b] = input[line++].split(" ").map(Number);

      if (graph[a][b]) {
        graph[a][b] = false;
        graph[b][a] = true;
        indegree[b]--;
        indegree[a]++;
      } else {
        graph[b][a] = false;
        graph[a][b] = true;
        indegree[a]--;
        indegree[b]++;
      }
    }

    const queue = [];
    for (let i = 1; i <= n; i++) {
      if (indegree[i] === 0) queue.push(i);
    }

    const result = [];
    let possible = true;
    let certain = true;
    let start = 0;

    for (let i = 0; i < n; i++) {
      if (queue.length - start === 0) {
        possible = false;
        break;
      }

      if (queue.length - start > 1) {
        certain = false;
      }

      const cur = queue[start++];
      result.push(cur);

      for (let j = 1; j <= n; j++) {
        if (graph[cur][j]) {
          indegree[j]--;
          if (indegree[j] === 0) {
            queue.push(j);
          }
        }
      }
    }

    if (!possible) console.log("IMPOSSIBLE");
    else if (!certain) console.log("?");
    else console.log(result.join(" "));
  }
});
