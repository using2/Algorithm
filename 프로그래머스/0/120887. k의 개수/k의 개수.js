function solution(i, j, k) {
    let count = 0;
    const target = k.toString();
    
    for (let num = i; num <= j; num++) {
        const strNum = num.toString();
        for (let char of strNum) {
            if (char === target) count++;
        }
    }
    
    return count;
}