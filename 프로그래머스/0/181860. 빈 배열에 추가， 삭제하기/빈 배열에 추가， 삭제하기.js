function solution(arr, flag) {
    let X = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j++) {
                X.push(arr[i]);
            }
        } else {
            X.splice(-arr[i], arr[i]);
        }
    }
    
    return X;
}