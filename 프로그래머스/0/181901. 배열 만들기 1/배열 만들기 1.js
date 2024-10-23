function solution(n, k) {
    const result = [];
    
    for (let i = 1; i * k <= n; i++) {
        result.push(i * k);
    }
    
    return result;
}