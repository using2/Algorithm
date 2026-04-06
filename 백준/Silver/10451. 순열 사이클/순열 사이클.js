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

    const visited = Array(N + 1).fill(false);
    let cycle = 0;

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        let current = i;

        while (!visited[current]) {
          visited[current] = true;
          current = arr[current];
        }

        cycle++;
      }
    }

    console.log(cycle);
  }
});
