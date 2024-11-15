function solution(my_string, overwrite_string, s) {
    var answer = my_string.substr(0, s) + overwrite_string + my_string.substr(overwrite_string.length + s);
    return answer;
}