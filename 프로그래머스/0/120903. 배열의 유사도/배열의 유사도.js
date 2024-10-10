function solution(s1, s2) {
    var answer = 0;
    s1.forEach(e => {
        if(s2.includes(e)) answer++;
    })
    return answer;
}