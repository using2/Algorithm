function solution(s){
    var answer = true;
    let arr = s.split("");
    let ansArr = [];
    
    arr.forEach(e => {
        if(e === "(") {
            ansArr.push("(");
        } else {
            if(ansArr[ansArr.length - 1] === "(") ansArr.pop();
            else answer = false;
        }
    })
    
    if(ansArr.length !== 0) answer = false;
    
    return answer;
}