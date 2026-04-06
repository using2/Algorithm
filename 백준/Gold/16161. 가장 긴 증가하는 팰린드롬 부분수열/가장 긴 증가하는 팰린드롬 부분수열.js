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
  const arr = input[1].split(" ").map(Number);

  let answer = 1;

  // 홀수 중심
  for (let i = 0; i < N; i++) {
    let l = i;
    let r = i;
    let prev = Infinity;
    let len = 0;

    while (l >= 0 && r < N && arr[l] === arr[r] && arr[l] < prev) {
      prev = arr[l];
      len += l === r ? 1 : 2;
      answer = Math.max(answer, len);
      l--;
      r++;
    }
  }

  // 짝수 중심
  for (let i = 0; i < N - 1; i++) {
    let l = i;
    let r = i + 1;
    let prev = Infinity;
    let len = 0;

    while (l >= 0 && r < N && arr[l] === arr[r] && arr[l] < prev) {
      prev = arr[l];
      len += 2;
      answer = Math.max(answer, len);
      l--;
      r++;
    }
  }

  console.log(answer);
});
