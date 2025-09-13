const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const target = parseInt(input[0]);           
  const m = parseInt(input[1] || 0);         
  const broken = m > 0 ? input[2].split(' ').map(e => parseInt(e)) : [];

  function canPress(num) {
    const s = String(num);
    for (let ch of s) {
      if (broken.includes(Number(ch))) return false;
    }
    return true;
  }

  let answer = Math.abs(target - 100);

  for (let i = 0; i <= 1000000; i++) {
    if (canPress(i)) {
      const pressCount = String(i).length;   
      const moveCount = Math.abs(target - i); 
      answer = Math.min(answer, pressCount + moveCount);
    }
  }

  console.log(answer);
});
