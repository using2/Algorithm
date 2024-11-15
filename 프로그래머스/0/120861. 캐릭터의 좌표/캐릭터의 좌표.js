function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    const xLimit = (board[0] - 1) / 2;
    const yLimit = (board[1] - 1) / 2;

    for (const key of keyinput) {
        if (key === "left") {
            x = Math.max(x - 1, -xLimit);
        } else if (key === "right") {
            x = Math.min(x + 1, xLimit);
        } else if (key === "up") {
            y = Math.min(y + 1, yLimit);
        } else if (key === "down") {
            y = Math.max(y - 1, -yLimit);
        }
    }

    return [x, y];
}
