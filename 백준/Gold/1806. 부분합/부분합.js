const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [N, S] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  let start = 0;
  let sum = 0;
  let ans = Infinity;

  for (let end = 0; end < N; end++) {
    sum += arr[end];

    while (sum >= S) {
      ans = Math.min(ans, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  console.log(ans === Infinity ? 0 : ans);
});
