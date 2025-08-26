const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
  let [L, C] = input[0].split(' ').map(Number);
  let chars = input[1].split(' ').sort(); 

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = [];

  function dfs(start, path) {
    if (path.length === L) {
      let vowelCount = 0, consonantCount = 0;
      for (let ch of path) {
        if (vowels.has(ch))
          vowelCount++;
        else
          consonantCount++;
      }

      if (vowelCount >= 1 && consonantCount >= 2) {
        result.push(path.join(''));
      }
      return;
    }

    for (let i = start; i < C; i++) {
      dfs(i + 1, [...path, chars[i]]);
    }
  }

  dfs(0, []);

  console.log(result.join('\n'));
});
