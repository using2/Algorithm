function solution(array) {
    let count = 0; 

    for (const num of array) {
        count += (num.toString().match(/7/g) || []).length;
    }

    return count;
}