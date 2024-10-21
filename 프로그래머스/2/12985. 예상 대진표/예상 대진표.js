function solution(n,a,b) {
    var answer = 1;
    if(a > b) [a, b] = [b, a];

    while(1) {
        if(a + 1 === b && Math.ceil(a / 2) === Math.ceil(b / 2)) break;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}