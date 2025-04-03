const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(""));
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (x, y, color, isBlind) => {
  const stack = [[x, y]];
  visited[x][y] = true;

  while (stack.length) {
    const [cx, cy] = stack.pop();

    for (const [dx, dy] of directions) {
      const nx = cx + dx,
        ny = cy + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[nx][ny]) continue;
      const nextColor = grid[nx][ny];
      if (
        nextColor === color ||
        (isBlind && ((color === "R" && nextColor === "G") || (color === "G" && nextColor === "R")))
      ) {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
};

let normal = 0,
  blind = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j, grid[i][j], false);
      normal++;
    }
  }
}

visited.forEach((row) => row.fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j, grid[i][j], true);
      blind++;
    }
  }
}

console.log(normal, blind);
