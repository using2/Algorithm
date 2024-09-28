function solution(my_string, n) {
    var answer = '';
    answer = my_string.split("").splice(0, n).join("");
    return answer;
}