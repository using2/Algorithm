function solution(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    }

    return fibo[n];
}
