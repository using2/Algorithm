function solution(num_list) {
    var answer = 0;
    const length = num_list.length;
    answer = num_list.reduce((cur, acc) => {
        if(length >= 11) return cur + acc;
        else return cur * acc;
    }, length >= 11? 0 : 1);
    return answer;
}