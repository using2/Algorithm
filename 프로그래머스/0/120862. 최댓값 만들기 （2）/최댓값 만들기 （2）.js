function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    const maxProduct1 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    const maxProduct2 = numbers[0] * numbers[1];
    
    return Math.max(maxProduct1, maxProduct2);
}