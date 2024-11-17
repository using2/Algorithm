function solution(numer1, denom1, numer2, denom2) {
    const numerator = numer1 * denom2 + numer2 * denom1;
    const denominator = denom1 * denom2;

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const divisor = gcd(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
}
