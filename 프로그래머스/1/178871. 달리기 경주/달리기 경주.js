function solution(players, callings) {
    var answer = [];
    let index = {};
    
    for(let i = 0; i < players.length; i++) {
        answer.push(players[i]);
        index[players[i]] = i;
    }
    
    callings.forEach(e => {
        let i = index[e];
        let 앞에있는놈 = answer[i - 1];
        [answer[i], answer[i - 1]] = [answer[i - 1], answer[i]];
        index[e] = i - 1;
        index[앞에있는놈] = i;
    })
    
    return answer;
}