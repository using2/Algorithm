function solution(N, number) {
    if (N === number) return 1;

    // dp[i]
    // N을 i개 사용해서 만들 수 있는 모든 숫자의 집합
    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));

        for (let j = 1; j < i; j++) {
            for (const left of dp[j]) {
                for (const right of dp[i - j]) {
                    dp[i].add(left + right);
                    dp[i].add(left - right);
                    dp[i].add(left * right);
                    if (right !== 0) {
                        dp[i].add(Math.floor(left / right));
                    }
                }
            }
        }

        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1;
}