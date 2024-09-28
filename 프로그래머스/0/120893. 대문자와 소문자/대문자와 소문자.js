function solution(my_string) {
    var answer = '';
    let arr = my_string.split("");
    
    arr.forEach(c => {
        if (c === c.toLowerCase()) {
            answer += c.toUpperCase();
        } 
        else if (c === c.toUpperCase()) {
            answer += c.toLowerCase();
        }
    });
    
    return answer;
}
