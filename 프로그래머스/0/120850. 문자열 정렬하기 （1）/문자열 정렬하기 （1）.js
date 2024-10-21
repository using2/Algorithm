function solution(my_string) {
    var answer = [];
    my_string.split("").forEach(e => {
        if(!isNaN(parseInt(e))) answer.push(parseInt(e));
    })
    
    answer.sort();
    
    return answer;
}