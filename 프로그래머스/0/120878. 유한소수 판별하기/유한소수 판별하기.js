function solution(a, b) {
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }

    const gcdValue = gcd(a, b);
    let reducedDenominator = b / gcdValue;

    while (reducedDenominator % 2 === 0) {
        reducedDenominator /= 2;
    }
    while (reducedDenominator % 5 === 0) {
        reducedDenominator /= 5;
    }

    return reducedDenominator === 1 ? 1 : 2;
}
