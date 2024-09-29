function isNum(c) {
    return !isNaN(parseInt(c));
}

function solution(s) {
    var answer = '';
    let isStart = true;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            isStart = true;
            answer += " ";
            continue;
        }
        if(isStart) {
            isStart = false;
            if(isNum(s[i])) answer += s[i];
            else answer += s[i].toUpperCase();
            continue;
        }
        answer += s[i].toLowerCase();
    }
    return answer;
}
