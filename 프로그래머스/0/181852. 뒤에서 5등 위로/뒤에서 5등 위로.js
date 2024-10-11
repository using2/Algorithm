function solution(num_list) {
    var answer = num_list.sort((a, b) => a - b);
    answer.splice(0, 5);    
    return answer;
}