function solution(n) {
    const factors = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            if (!factors.includes(i)) {
                factors.push(i); 
            }
            n /= i; 
        }
    }

    if (n > 1) {
        factors.push(n);
    }

    return factors.sort((a, b) => a - b); 
}