function solution(n) {
    var answer = n + 1;
    let oneCnt = n.toString(2).split(1).length - 1;
    
    while(true) {
        let cnt = answer.toString(2).split(1).length - 1;
        if(cnt === oneCnt) break;
        answer++;
    }
    
    return answer;
}