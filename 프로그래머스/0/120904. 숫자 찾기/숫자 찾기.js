function solution(num, k) {
    var answer = num.toString().split("").findIndex(e => parseInt(e) === k);
    return answer === -1? -1 : answer + 1;
}