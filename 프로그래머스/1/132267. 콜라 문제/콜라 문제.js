function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        answer += Math.floor(n / a) * b;
        let mod = n % a;
        n = Math.floor(n / a) * b;
        n += mod;
    }
    return answer;
}