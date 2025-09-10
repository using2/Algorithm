const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [N, C] = input[0].split(" ").map(Number);
  const houses = input.slice(1).map(Number).sort((a, b) => a - b);

  function canInstall(distance) {
    let count = 1; 
    let last = houses[0];

    for (let i = 1; i < houses.length; i++) {
      if (houses[i] - last >= distance) {
        count++;
        last = houses[i];
      }
    }
    return count >= C;
  }

  let left = 1;
  let right = houses[houses.length - 1] - houses[0];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canInstall(mid)) {
      result = mid; 
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }

  console.log(result);
});
