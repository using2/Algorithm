function gcd(a, b) {
    while (b > 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function solution(n) {
    let answer = (n * 6) / gcd(n, 6);
    return answer / 6;
}