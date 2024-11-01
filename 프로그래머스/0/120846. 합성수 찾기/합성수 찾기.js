function solution(n) {
    let compositeCount = 0;

    for (let i = 1; i <= n; i++) {
        let divisorCount = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
        }

        if (divisorCount >= 3) {
            compositeCount++;
        }
    }

    return compositeCount;
}