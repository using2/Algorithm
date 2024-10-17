function solution(num_list, n) {
    var answer = [];
    const after = num_list.slice(n);
    const prev = num_list.slice(0, n);
    answer = [ ...after, ...prev];
    return answer;
}