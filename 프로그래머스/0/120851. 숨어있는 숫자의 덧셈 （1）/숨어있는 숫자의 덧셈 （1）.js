function solution(my_string) {
    var answer = 0;
    let arr = my_string.split("");
    arr = arr.forEach(n => {
        if (!isNaN(parseInt(n))) {
            answer += parseInt(n);
        }
    })
    return answer;
}