function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const maxProduct = numbers[0] * numbers[1];
    
    return maxProduct;
}