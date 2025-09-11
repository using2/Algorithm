const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  const range = {0: 0, 1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 2};
  let doku = input.map((row) => row.split(' ').map((col) => parseInt(col)));

  function findRowCol(i, j, possibleNums) {
    for (let start = 0; start < 9; start++) {
      possibleNums[doku[i][start]] = false;
      possibleNums[doku[start][j]] = false;
    }
    return possibleNums;
  }

  function findSquare(i, j, possibleNums) {
    for (let row = range[i] * 3; row < range[i] * 3 + 3; row++) {
      for (let col = range[j] * 3; col < range[j] * 3 + 3; col++) {
        possibleNums[doku[row][col]] = false;
      }
    }
    return possibleNums;
  }

  function findPossibleNumber(i, j) {
    if (doku[i][j] !== 0) return [];

    let possibleNums = {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true
    };

    possibleNums = findRowCol(i, j, possibleNums);
    possibleNums = findSquare(i, j, possibleNums);

    return Object.keys(possibleNums)
        .filter(num => possibleNums[num])
        .map(Number);
  }

  function dokuFind() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (doku[i][j] === 0) {
          let candidates = findPossibleNumber(i, j);
          for (let num of candidates) {
            doku[i][j] = num;
            if (dokuFind()) return true;
            doku[i][j] = 0;
          }
          return false;
        }
      }
    }
    return true;
  }

  dokuFind();
  doku.forEach(row => console.log(row.join(' ')));
});
