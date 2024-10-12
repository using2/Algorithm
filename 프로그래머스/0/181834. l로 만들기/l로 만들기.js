function solution(myString) {
    var answer = '';
    const alpha = "mnopqrstuvwxyz";
    myString.split("").forEach(e => {
        if(!alpha.includes(e)) answer += "l";
        else answer += e;
    })
    return answer;
}