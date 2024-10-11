function solution(a, b) {
    var answer = 0;
    let odd1 = isOdd(a);
    let odd2 = isOdd(b);
    if(odd1 && odd2) answer = Math.pow(a, 2) + Math.pow(b, 2);
    else if(!odd1 && !odd2) answer = Math.abs(a - b);
    else answer = 2 * (a + b);
    return answer;
}

function isOdd(num) {
    return num % 2 === 1;
}