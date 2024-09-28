function solution(array) {
    var answer = [];

    let arr = array.map((n, i) => [n, i]);
    arr = arr.sort((a, b) => b[0] - a[0]);
    answer = arr[0];
    
    return answer;
}
