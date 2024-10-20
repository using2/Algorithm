function solution(s) {
    var answer = [];
    let array = s.split('');
    let last = {};
    
    for(let i = 0; i < array.length; i++) {
        if(last[array[i]] === undefined) {
            last[array[i]] = i;
            answer.push(-1);
            continue;
        }
        answer.push(i - last[array[i]]);
        last[array[i]] = i;
    }
    
    return answer;
}