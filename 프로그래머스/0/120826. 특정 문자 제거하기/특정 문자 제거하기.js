function solution(my_string, letter) {
    var answer = '';
    let arr = my_string.split("");
    arr = arr.filter(c => c !== letter);
    answer = arr.join("");
    return answer;
}