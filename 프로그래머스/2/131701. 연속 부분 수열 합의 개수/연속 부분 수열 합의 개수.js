function solution(elements) {
    const n = elements.length;
    const extendedElements = elements.concat(elements); 
    const sums = new Set(); 
    
    for (let length = 1; length <= n; length++) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < length; j++) {
                sum += extendedElements[i + j];
            }
            sums.add(sum); 
        }
    }
    
    return sums.size; 
}