const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function knapsack(N, K, items) {
    let dp = new Array(K + 1).fill(0);

    for (let i = 0; i < N; i++) {
        let [W, V] = items[i];
        for (let w = K; w >= W; w--) {
            dp[w] = Math.max(dp[w], dp[w - W] + V);
        }
    }

    return dp[K];
}

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    let [N, K] = input[0].split(" ").map(Number);
    let items = input.slice(1).map(line => line.split(" ").map(Number));
    
    console.log(knapsack(N, K, items));
});
