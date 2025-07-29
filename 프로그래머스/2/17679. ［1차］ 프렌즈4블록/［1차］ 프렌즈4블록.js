function solution(m, n, board) {
    board = board.map(row => row.split("")); 
    let answer = 0;

    while (true) {
        const toRemove = new Set();

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = board[i][j];
                if (
                    current &&
                    current === board[i][j + 1] &&
                    current === board[i + 1][j] &&
                    current === board[i + 1][j + 1]
                ) {
                    toRemove.add(`${i},${j}`);
                    toRemove.add(`${i},${j + 1}`);
                    toRemove.add(`${i + 1},${j}`);
                    toRemove.add(`${i + 1},${j + 1}`);
                }
            }
        }

        if (toRemove.size === 0) break;

        toRemove.forEach(pos => {
            const [x, y] = pos.split(',').map(Number);
            board[x][y] = null;
        });

        for (let j = 0; j < n; j++) {
            let empty = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] !== null) {
                    board[empty][j] = board[i][j];
                    if (empty !== i) board[i][j] = null;
                    empty--;
                }
            }
        }

        answer += toRemove.size;
    }

    return answer;
}
