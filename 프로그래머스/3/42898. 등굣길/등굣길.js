function solution(m, n, puddles) {
    var answer = 0;
    
    let isPuddle = new Set();
    puddles.forEach(puddle => {
        isPuddle.add(puddle.join(","));
    })
    
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    
    dp[1][1] = 1;  
    
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (x === 1 && y === 1) continue;
            if (isPuddle.has(`${x},${y}`)) continue;

            dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % 1000000007;
        }
    }
    
    answer = dp[n][m] % 1000000007;
    
    return answer;
}