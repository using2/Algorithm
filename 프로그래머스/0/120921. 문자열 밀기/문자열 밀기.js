function solution(A, B) {
    const length = A.length;
    let shifted = A;

    for (let count = 0; count < length; count++) {
        if (shifted === B) {
            return count;
        }
        shifted = shifted.slice(-1) + shifted.slice(0, -1);
    }

    return -1; 
}
