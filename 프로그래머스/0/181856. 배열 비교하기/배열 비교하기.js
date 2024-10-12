function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length === arr2.length) {
        let sum1 = sum(arr1);
        let sum2 = sum(arr2);
        answer = sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    } else if(arr1.length > arr2.length) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}

function sum(arr) {
    return arr.reduce((acc, cur) => {
        return acc = acc + cur;
    }, 0)
}