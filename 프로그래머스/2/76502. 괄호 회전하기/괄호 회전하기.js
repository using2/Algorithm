function rotateString(s, x) {
    return s.slice(x) + s.slice(0, x);
}

function isValidParentheses(s) {
    const stack = [];
    const matching = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.pop() !== matching[char]) {
                return false; 
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let validCount = 0;
    const n = s.length;
    
    for (let x = 0; x < n; x++) {
        const rotated = rotateString(s, x); 
        if (isValidParentheses(rotated)) {
            validCount++;
        }
    }
    
    return validCount;
}