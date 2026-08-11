function solution(info, n, m) {
    let dp = new Array(n).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i < info.length; i++) {
        let [a, b] = info[i];

        let next = new Array(n).fill(Infinity);

        for (let A = 0; A < n; A++) {
            if (dp[A] === Infinity) continue;

            let B = dp[A];

            let nextA = A + a;

            if (nextA < n) {
                next[nextA] = Math.min(next[nextA], B);
            }

            let nextB = B + b;

            if (nextB < m) {
                next[A] = Math.min(next[A], nextB);
            }
        }

        dp = next;
    }

    for (let A = 0; A < n; A++) {
        if (dp[A] !== Infinity) {
            return A;
        }
    }

    return -1;
}