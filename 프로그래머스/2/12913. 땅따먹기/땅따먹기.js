function solution(land) {
    const n = land.length;
    
    const answer = Array.from({ length: n }, () => new Array(4).fill(0));
    answer[0] = [...land[0]];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    answer[i][j] = Math.max(answer[i][j], answer[i - 1][k] + land[i][j]);
                }
            }
        }
    }

    return Math.max(...answer[n - 1]);
}
