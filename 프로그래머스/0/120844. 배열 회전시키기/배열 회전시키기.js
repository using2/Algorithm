function solution(numbers, direction) {
    if (direction === "right") {
        const lastElement = numbers.pop(); 
        numbers.unshift(lastElement);
    } else if (direction === "left") {
        // 왼쪽으로 회전
        const firstElement = numbers.shift(); 
        numbers.push(firstElement); 
    }
    return numbers; 
}