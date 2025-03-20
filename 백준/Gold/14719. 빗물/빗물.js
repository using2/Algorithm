const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function solution(array) {
  let 빗물 = 0;

  array.forEach((row, i) => {
    let left = false;
    let available = 0;
    row.forEach((c, j) => {
      if (array[i][j] === 1) {
        if (left) 빗물 += available;
        available = 0;
        left = true;
      }
      if (left && array[i][j] === 0) available += 1;
    })
  })

  console.log(빗물);
}


readline.on('line', (line) => input.push(line.split(' ').map(e => parseInt(e))))
    .on('close', () => {
      let [h, w] = input[0];
      let heights = input[1];

      let array = Array.from({length: h}, () => new Array(w).fill(0));

      for (let col = 0; col < w; col++) {
        let height = heights[col];
        for (let row = 0; row < height; row++) {
          array[h - 1 - row][col] = 1;
        }
      }

      solution(array);
      process.exit();
    });
