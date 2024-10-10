function solution(my_string, n) {
    var answer = '';
    my_string.split("").forEach(e => {
        for(let i = 0; i < n; i++) answer += e;
    })
    return answer;
}