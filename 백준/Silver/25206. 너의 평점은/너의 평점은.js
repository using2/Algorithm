const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const gradeMap = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
  };

  let totalScore = 0;
  let totalCredit = 0;

  input.forEach((line) => {
    const [subject, credit, grade] = line.split(' ');
    const c = parseFloat(credit);
    if (grade !== 'P') {
      totalScore += c * gradeMap[grade];
      totalCredit += c;
    }
  });

  console.log((totalScore / totalCredit).toFixed(6));
});
