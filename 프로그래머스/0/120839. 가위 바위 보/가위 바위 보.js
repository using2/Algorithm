function solution(rsp) {
    let answer = '';
    const winnerConstant = {
        "2": "0",
        "0": "5",
        "5": "2"  
    };
    
    answer = rsp.split("").map(e => winnerConstant[e]).join('');
    
    return answer;
}
