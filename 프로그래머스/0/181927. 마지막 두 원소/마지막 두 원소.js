function solution(num_list) {
    var answer = [];
    const length = num_list.length;
    const last = num_list[length - 1];
    const prevLast = num_list[length - 2];
    const newNum = last > prevLast? last - prevLast : last * 2;
    answer = num_list;
    answer.push(newNum);
    return answer;
}