const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(...line.trim().split(/\s+/).map(Number)); 
}).on('close', () => {
  const n = input[0];
  const distances = input.slice(1, n);        
  const prices = input.slice(n, n + n);   

  let total = 0n;   
  let minPrice = BigInt(prices[0]);

  for (let i = 0; i < n - 1; i++) {
    if (BigInt(prices[i]) < minPrice) {
      minPrice = BigInt(prices[i]);
    }
    total += minPrice * BigInt(distances[i]);
  }

  console.log(total.toString());
});
