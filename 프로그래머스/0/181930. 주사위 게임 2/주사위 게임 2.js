function solution(a, b, c) {
    const numbers = [a, b, c];
    const uniqueNumbers = new Set(numbers);
    
    const sum = a + b + c; 
    const sumOfSquares = a * a + b * b + c * c; 
    const sumOfCubes = a * a * a + b * b * b + c * c * c; 
    
    if (uniqueNumbers.size === 3) {
        return sum;
    } else if (uniqueNumbers.size === 2) {
        return sum * sumOfSquares;
    } else {
        return sum * sumOfSquares * sumOfCubes;
    }
}