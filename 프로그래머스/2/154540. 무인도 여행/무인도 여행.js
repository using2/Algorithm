function solution(maps) {
    var answer = [];
    
    let graph = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(0));
    let visit = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
    
    let flag = true;
    
    maps.forEach((m, i) => {
        m.split("").forEach((e, j) => {
            if (e === "X") graph[i][j] = 0;
            else {
                graph[i][j] = Number(e);
                flag = false;
            }
        });
    });
    
    if(flag) return [-1];
    
    let direction = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    
    function find(now, cost) {
        let [i, j] = now;

        if (visit[i][j] || graph[i][j] === 0) return 0;

        visit[i][j] = true;

        for (let [di, dj] of direction) {
            let ni = di + i;
            let nj = dj + j;

            if (ni < 0 || nj < 0 || ni >= maps.length || nj >= maps[0].length) continue;

            cost += find([ni, nj], 0);
        }

        return cost + graph[i][j];
    }
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (!visit[i][j] && graph[i][j] !== 0) {
                answer.push(find([i, j], 0));
            }
        }
    }
    
    answer.sort((a, b) => a - b);

    return answer;
}