function solution(sides) {
    sides.sort((a, b) => a - b);
    const [a, b] = sides;
    
    const case1 = (a + b) - b;
    const case2 = (a + b) - b - 1;
    
    return case1 + case2;
}