function solution(arr, intervals) {
    const [a1, b1] = intervals[0];
    const firstInterval = arr.slice(a1, b1 + 1);
    
    const [a2, b2] = intervals[1];
    const secondInterval = arr.slice(a2, b2 + 1);
    
    return firstInterval.concat(secondInterval);
}