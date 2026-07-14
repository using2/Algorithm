function solution(arrayA, arrayB) {
    let answer = [];
    
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    
    function isAllDivide(num, arr) {
        return arr.every(n => n % num === 0);
    }
    
    function isSomeDivide(num, arr) {
        return arr.some(n => n % num === 0);
    }
    
    for(let i = arrayA[0]; i > 0; i--) {
        if(isAllDivide(i, arrayA) && !isSomeDivide(i, arrayB)) answer.push(i);
    }
    for(let i = arrayB[0]; i > 0; i--) {
        if(isAllDivide(i, arrayB) && !isSomeDivide(i, arrayA)) answer.push(i);
    }
    
    answer.sort((a, b) => b - a);
    
    return answer.length === 0 ? 0 : answer[0];
}