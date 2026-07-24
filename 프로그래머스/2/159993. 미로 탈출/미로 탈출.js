function solution(maps) {
    let start = [];
    let end = [];
    let lever = [];
    
    maps.forEach((map, i) => {
        map.split("").forEach((m, j) => {
            if(m === "S") start = [i, j];
            if(m === "L") lever = [i, j];
            if(m === "E") end = [i, j];
        })
    })
    
    function bfs(s, e) {
        let queue = [[...s, 0]];
        let top = 0;
        let visit = Array.from({length: maps.length}, () => new Array(maps[0].length).fill(false));
    
        visit[s[0]][s[1]] = true;
        
        while(queue.length > top) {
            let [i, j, dist] = queue[top++];
            
            if(e[0] === i && e[1] === j) return dist;
            
            for(let [nx, ny] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
                if(nx >= maps.length || ny >= maps[0].length || nx < 0 || ny < 0) continue;
            
                if(!visit[nx][ny] && maps[nx][ny] !== "X") {
                    visit[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }   
    }
    
    let startToLever = bfs(start, lever);
    let leverToEnd = bfs(lever, end);
    
    if(isNaN(startToLever) || isNaN(leverToEnd)) return -1;
    
    return startToLever + leverToEnd;
}