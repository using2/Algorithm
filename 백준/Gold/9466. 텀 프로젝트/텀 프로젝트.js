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
  let idx = 1;

  while (t--) {
    const N = Number(input[idx++]);
    const arr = [0, ...input[idx++].split(" ").map(Number)];

    const visited = Array(N + 1).fill(0); // 0: 안함, 1: 진행중, 2: 완료
    let cycleCount = 0;

    for (let i = 1; i <= N; i++) {
      if (visited[i] !== 0) continue;

      let stack = [];
      let current = i;

    
      while (true) {
        if (visited[current] === 0) {
          visited[current] = 1;
          stack.push(current);
          current = arr[current];
        } else if (visited[current] === 1) {
          let idx = stack.indexOf(current);
          cycleCount += stack.length - idx;
          break;
        } else {
          break;
        }
      }

      for (let node of stack) {
        visited[node] = 2;
      }
    }

    console.log(N - cycleCount);
  }
});
