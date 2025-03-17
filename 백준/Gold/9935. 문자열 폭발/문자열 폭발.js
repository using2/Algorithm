const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(str, 폭발) {
    const r_target = 폭발.split('').reverse();
    const last = 폭발[폭발.length - 1];
    const answer = [];
    
    const check = () => {
      if (answer.length < 폭발.length - 1) return false
      for (let i = 1; i < 폭발.length; i++) {
        if (r_target[i] != answer[answer.length - i]) {
          return false;
        }
      }
      return true;
    }
    
    
    for (let i = 0; i < str.length; i++) {
      const now = str[i];
      if (now == last && check()) {
        for (let j = 0; j < 폭발.length - 1; j++) {
          answer.pop();
        }
      } else {
        answer.push(now);
      }
    }
    
    if (answer.length == 0) {
      console.log('FRULA')
    } else {
      console.log(answer.join(''))
    }
}

readline
    .on('line',
        function(line) {
          input.push(line);
        })
    .on('close', function() {
      let str = input[0];
      let 폭발 = input[1];
      solution(str, 폭발);
      process.exit();
    });
