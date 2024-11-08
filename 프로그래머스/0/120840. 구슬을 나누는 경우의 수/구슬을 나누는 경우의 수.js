function solution(balls, share) {
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    const fac1 = factorial(balls)
    const fac2 = (factorial(share) * factorial(balls - share));
    return Math.round(fac1 / fac2);
}