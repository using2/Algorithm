function solution(a, d, included) {
    let totalSum = 0;

    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            totalSum += a + i * d; 
        }
    }

    return totalSum; 
}