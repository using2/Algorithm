const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const N = parseInt(input[0]);
  const arr = input[1].split(" ").map(Number);

  const dp_inc = Array(N).fill(1);
  const dp_dec = Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp_inc[i] = Math.max(dp_inc[i], dp_inc[j] + 1);
      }
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j > i; j--) {
      if (arr[j] < arr[i]) {
        dp_dec[i] = Math.max(dp_dec[i], dp_dec[j] + 1);
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer = Math.max(answer, dp_inc[i] + dp_dec[i] - 1);
  }

  console.log(answer);
});
