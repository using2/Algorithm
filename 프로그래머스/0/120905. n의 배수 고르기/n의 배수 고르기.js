function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(c => 0 === c % n);
    return answer;
}