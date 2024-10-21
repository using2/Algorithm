function solution(k, tangerine) {
    let countMap = new Map();

    tangerine.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    let counts = Array.from(countMap.values()).sort((a, b) => b - a);

    let result = 0;
    let sum = 0;

    for (let count of counts) {
        sum += count;
        result++;
        if (sum >= k) break;
    }

    return result;
}