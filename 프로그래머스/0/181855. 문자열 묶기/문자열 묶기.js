function solution(strArr) {
    const lengthMap = {};

    for (const str of strArr) {
        const length = str.length;
        lengthMap[length] = (lengthMap[length] || 0) + 1;
    }

    const maxGroupSize = Math.max(...Object.values(lengthMap));
    
    return maxGroupSize;
}