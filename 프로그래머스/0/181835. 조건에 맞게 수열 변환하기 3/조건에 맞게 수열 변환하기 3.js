function solution(arr, k) {
    var answer = [];
    answer = k % 2 !== 0? arr.map(e => e * k) : arr.map(e => e + k);
    return answer;
}