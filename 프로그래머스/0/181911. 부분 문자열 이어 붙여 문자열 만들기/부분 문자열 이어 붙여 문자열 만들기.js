function solution(my_strings, parts) {
    var answer = '';
    parts.forEach((p, i) => {
        let s = p[0];
        let length = p[1] - s + 1;
        answer += my_strings[i].split("").splice(s, length).join("");
    })
    return answer;
}