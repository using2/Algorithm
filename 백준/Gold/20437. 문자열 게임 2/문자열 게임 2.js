const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(str, k) {
  let cnt = {};
  let positions = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    cnt[char] = (cnt[char] || 0) + 1;
    if (!positions[char]) positions[char] = [];
    positions[char].push(i);
  }

  let third = Infinity;
  let fourth = -Infinity;

  for (let char in positions) {
    if (cnt[char] >= k) {
      let pos = positions[char];
      for (let j = 0; j <= pos.length - k; j++) {
        let length = pos[j + k - 1] - pos[j] + 1;
        third = Math.min(third, length);
        fourth = Math.max(fourth, length);
      }
    }
  }

  if (third === Infinity || fourth === -Infinity) {
    console.log(-1);
  } else {
    console.log(third + ' ' + fourth);
  }
}

readline.on('line', (line) => input.push(line)).on('close', () => {
  let n = parseInt(input[0]);
  for (let i = 0; i < n; i++) {
    let str = input[(i * 2) + 1];
    let k = parseInt(input[(i + 1) * 2]);
    solution(str, k);
  }
  process.exit();
});
