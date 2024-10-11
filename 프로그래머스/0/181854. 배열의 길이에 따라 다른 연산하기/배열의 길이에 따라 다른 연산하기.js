function solution(arr, n) {
    var answer = arr;
    let even = arr.length % 2 === 0 ? true : false;
    let startIdx = even? 1 : 0;
    for(let i = startIdx; i < arr.length; i += 2) {
        answer[i] += n;
    }
    return answer;
}