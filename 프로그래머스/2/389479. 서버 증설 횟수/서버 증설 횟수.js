function solution(players, m, k) {
    var answer = 0;
    let server = [];
    
    for(let i = 0; i < players.length; i++) {
        server = server.map(e => --e).filter(e => e !== 0);
        
        if(server.length * m <= players[i] && players[i] >= m) {
            let cnt = Math.floor((players[i] - (server.length * m)) / m);
            for(let j = 0; j < cnt; j++) server.push(k);
            answer += cnt;
        }
        
    }
    
    return answer;
}