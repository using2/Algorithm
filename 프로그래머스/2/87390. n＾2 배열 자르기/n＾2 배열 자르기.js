function solution(n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n); 
        const col = i % n; 

        answer.push(Math.max(row + 1, col + 1));
    }

    return answer;
}

// 규칙 찾기. (2차원 좌표)(: 1차원 좌표) = 값
//
// n = 3
// (1,1)(: 1) = 1 (1,2)(: 2) = 2 (1,3)(: 3) = 3
// (2,1)(: 4) = 2 (2,2)(: 5) = 2 (2,3)(: 6) = 3
// (3,1)(: 7) = 3 (3,2)(: 8) = 3 (3,3)(: 9) = 3
//