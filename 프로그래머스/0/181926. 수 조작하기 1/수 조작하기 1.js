function solution(n, control) {
    var answer = n;
    const num = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10
    };
    
    control.split("").forEach(e => {
        answer += num[e];
    })
    return answer;
}