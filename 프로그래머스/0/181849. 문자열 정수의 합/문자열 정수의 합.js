function solution(num_str) {
    var answer = num_str.split("").reduce((acc, cur) => {
        return acc + parseInt(cur);
    }, 0); 
    return answer;
}