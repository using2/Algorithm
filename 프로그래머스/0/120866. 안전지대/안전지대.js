function solution(board) {
    var answer = 0;
    const n = board[0].length; 
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                if(i > 0) board[i - 1][j] = board[i - 1][j] === 1? 1 : 2;
                if(j > 0) board[i][j - 1] = board[i][j - 1] === 1? 1 : 2;
                if(i < n - 1) board[i + 1][j] = board[i + 1][j] === 1? 1 : 2;
                if(j < n - 1) board[i][j + 1] = board[i][j + 1] === 1? 1 : 2;
                if(i > 0 && j > 0) board[i - 1][j - 1] = board[i - 1][j - 1] === 1? 1 : 2;
                if(i > 0 && j < n - 1) board[i - 1][j + 1] = board[i - 1][j + 1] === 1? 1 : 2;
                if(i < n - 1 && j < n - 1) board[i + 1][j + 1] = board[i + 1][j + 1] === 1? 1 : 2;
                if(i < n - 1 && j > 0) board[i + 1][j - 1] = board[i + 1][j - 1] === 1? 1 : 2;
            }
        }
    }
    
    answer = board.reduce((acc, cur) => {
        let row = cur.reduce((ac, cu) => {
            if(cu === 0) return ac + 1;
            return ac;
        }, 0);
        
        return row + acc;
    }, 0);
    
    return answer;
}