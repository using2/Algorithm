function solution(arr) {
    let length = arr.length;
    
    if ((length & (length - 1)) === 0) {
        return arr;
    }
    
    let newLength = 1;
    while (newLength < length) {
        newLength *= 2;
    }
    
    while (arr.length < newLength) {
        arr.push(0);
    }
    
    return arr;
}