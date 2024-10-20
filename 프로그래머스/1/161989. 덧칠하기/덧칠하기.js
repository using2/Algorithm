function solution(n, m, section) {
    var answer = 0;
    
    let wall = new Array(n).fill(1);
    for(let i = 0; i < section.length; i++) wall[section[i] - 1] = 0;
    
    while(wall.indexOf(0) !== -1) {
        let index = wall.indexOf(0);
        for(let i = index; i < index + m; i++) {
            wall[i] = 1;
        }
        answer++;
    }
    
    return answer;
}