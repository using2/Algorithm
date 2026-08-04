function solution(places) {
    var answer = [];
    
    function check(place, i, j) {
        if (place[i][j] !== "P") return true;

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let [di, dj] of directions) {
            let ni = di + i;
            let nj = dj + j;

            if (ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;

            if (place[ni][nj] === "P") return false;

            let nni = di * 2 + i;
            let nnj = dj * 2 + j;

            if (nni < 0 || nnj < 0 || nni >= 5 || nnj >= 5) continue;

            if (
                place[nni][nnj] === "P" &&
                place[ni][nj] !== "X"
            ) {
                return false;
            }
        }

        let directions2 = [[-1, -1], [1, 1], [-1, 1], [1, -1]];

        for (let [di, dj] of directions2) {
            let ni = di + i;
            let nj = dj + j;

            if (ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;

            if (place[ni][nj] === "P") {
                if (
                    place[i][nj] !== "X" ||
                    place[ni][j] !== "X"
                ) {
                    return false;
                }
            }
        }

        return true;
    }
    
    places.forEach(p => {
        let chk = true;
        p.forEach((row, i) => {
            row.split("").forEach((col, j) => {
                if(!check(p, i, j)) chk = false;
            })
        })
        if(chk) answer.push(1);
        else answer.push(0);
    })
    
    return answer;
}