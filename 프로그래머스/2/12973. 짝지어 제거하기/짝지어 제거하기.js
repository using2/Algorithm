function solution(s) {
    var answer = -1;
    let arr = s.split("");
    let stack = [];
    
    arr.forEach(e => {
        if(stack[stack.length - 1] === e) stack.pop();
        else {
            stack.push(e);
        }
    })
    
    answer = stack.length === 0? 1 : 0;

    return answer;
}