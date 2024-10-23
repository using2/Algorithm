function solution(order) {
    const orderStr = order.toString();
    
    let clapCount = 0;

    for (let char of orderStr) {
        if (char === '3' || char === '6' || char === '9') {
            clapCount++;
        }
    }

    return clapCount; 
}