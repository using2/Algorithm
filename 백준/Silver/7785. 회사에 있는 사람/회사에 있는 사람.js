const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  let map = {};

  for (let i = 1; i <= n; i++) {
    let [name, type] = input[i].split(" ");
    if (type === "enter") {
      map[name] = true;
    } else {
      delete map[name];
    }
  }

  let members = Object.keys(map);
  members.sort().reverse();  

  console.log(members.join("\n"));
});
