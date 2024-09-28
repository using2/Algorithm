function solution(n) {
    var answer = 0;
    let initNum = n % 2 === 0? 2 : 1;
    let flag = n % 2 === 0;
    for(let i = initNum; i <= n; i += 2){
        if(flag) answer += (i ** 2);
        else answer += i;
    }
    return answer;
}