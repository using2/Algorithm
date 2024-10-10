function solution(str_list, ex) {
    var answer = '';
    str_list.forEach(e => {
        if(!e.includes(ex)) answer += e;
    })
    return answer;
}