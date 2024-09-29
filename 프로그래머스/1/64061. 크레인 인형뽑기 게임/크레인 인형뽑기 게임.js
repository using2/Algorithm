function solution(board, moves) {
    var answer = 0;
    let arr = [];
    let basket = [];
    for(let i = 0; i < board.length; i++) arr.push(new Array());
    for(let i = board.length - 1; i >= 0; i--) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] !== 0) arr[j].push(board[i][j]);
        }
    }
    
    moves.forEach(m => {
        if(arr[m - 1][arr[m - 1].length-1]) {
            let doll = arr[m - 1][arr[m - 1].length-1];
            arr[m - 1].pop();
            
            if(basket.length > 0 && basket[basket.length - 1] === doll) {
                basket.pop();
                answer += 2;
            } else {
                basket.push(doll);
            }
        }
    });
    return answer;
}