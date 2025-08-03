function solution(n) {
    const MOD = 1000000007;

    if (n % 2 !== 0) return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[2] = 3;

    for (let i = 4; i <= n; i += 2) {
        dp[i] = dp[i - 2] * 3 % MOD;

        for (let j = 0; j <= i - 4; j += 2) {
            dp[i] = (dp[i] + dp[j] * 2) % MOD;
        }
    }

    return dp[n];
}
