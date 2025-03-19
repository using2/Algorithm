const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function 회전(belt, n) {
  belt.unshift(belt.pop());

  if (belt[n - 1].로봇) {
    belt[n - 1].로봇 = false;
  }
}

function 이동(belt, n) {
  let broken = 0;

  for (let i = n - 2; i >= 0; i--) {
    if (belt[i].로봇 && !belt[i + 1].로봇 && belt[i + 1].내구성 > 0) {
      belt[i].로봇 = false;
      belt[i + 1].로봇 = true;
      belt[i + 1].내구성 -= 1;

      if (belt[i + 1].내구성 === 0) {
        broken++;
      }
    }
  }

  if (belt[n - 1].로봇) {
    belt[n - 1].로봇 = false;
  }

  return broken;
}

function solution(n, k, a) {
  let belt = a.map(내구성 => ({로봇: false, 내구성}));
  let broken = 0;
  let step = 0;

  while (broken < k) {
    step++;

    회전(belt, n);

    broken += 이동(belt, n);

    if (belt[0].내구성 > 0) {
      belt[0].로봇 = true;
      belt[0].내구성 -= 1;
      if (belt[0].내구성 === 0) {
        broken++;
      }
    }
  }

  console.log(step);
}

readline
    .on('line',
        function(line) {
          input.push(line.split(' ').map(Number));
        })
    .on('close', function() {
      let [n, k] = input[0];
      let a = input[1];
      solution(n, k, a);
      process.exit();
    });
