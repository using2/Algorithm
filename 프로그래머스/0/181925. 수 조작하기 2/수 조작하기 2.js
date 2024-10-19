function solution(numLog) {
    var answer = '';
    let num = numLog[0]; 
    const wsda = {
        "1": "w",
        '-1': "s",
        "10": "d",
        "-10": "a"
    };
    
    for (let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - num; 
        answer += wsda[diff];
        num = numLog[i];
    }
    
    return answer;
}