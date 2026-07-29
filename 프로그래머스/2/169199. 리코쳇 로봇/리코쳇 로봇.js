function solution(board) {
    var answer = 0;
    
    let start = [0, 0];
    let end = [0, 0];
    
    let graph = Array.from(
        { length: board.length },
        () => new Array(board[0].length).fill(false)
    );

    let visited = Array.from(
        { length: board.length },
        () => new Array(board[0].length).fill(false)
    );
    
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    board.forEach((b, i) => {
        b.split("").forEach((e, j) => {
            if (e === "R") start = [i, j];
            if (e === "G") end = [i, j];
            if (e !== "D") graph[i][j] = true;
        });
    });

    function move() {
        let queue = [];
        let top = 0;
        
        queue.push([...start, 0]);
        visited[start[0]][start[1]] = true;
        
        while (queue.length > top) {
            let [i, j, dist] = queue[top++];
            
            if (i === end[0] && j === end[1]) {
                return dist;
            }
            
            for (let [dx, dy] of directions) {
                let nx = i;
                let ny = j;

                while (
                    nx + dx >= 0 &&
                    nx + dx < board.length &&
                    ny + dy >= 0 &&
                    ny + dy < board[0].length &&
                    graph[nx + dx][ny + dy]
                ) {
                    nx += dx;
                    ny += dy;
                }

                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }

        return -1;
    }
    
    answer = move();
    
    return answer;
}