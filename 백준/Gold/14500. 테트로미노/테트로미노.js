const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
  }).on('close', () => {
  const [n, m] = input[0];
  const board = input.slice(1);

  const polyomino = [
    // box
    [
      [1, 1],
      [1, 1],
    ],
    // bar
    [[1, 1, 1, 1]],
    [[1], [1], [1], [1]],
    // T
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
    // thunder
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    // L
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
  ];

  const calcArea = (shape, w, h, rowNum, colNum) => {
    let area = 0;
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        area += board[rowNum + i][colNum + j] * shape[i][j];
      }
    }
    return area;
  };

  const getMax = (shape, width, height) => {
    let max = 0;
    for (let i = 0; i <= n - width; i++) {
      for (let j = 0; j <= m - height; j++) {
        max = Math.max(max, calcArea(shape, width, height, i, j));
      }
    }
    return max;
  };

  let answer = 0;
  for (let shape of polyomino) {
    const [wSize, hSize] = [shape.length, shape[0].length];
    answer = Math.max(answer, getMax(shape, wSize, hSize));
  }

  console.log(answer);
});
