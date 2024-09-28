function solution(hp) {
    var answer = 0;
    let strongest = 5;
    let strong = 3;
    let weak = 1;
    
    if(hp >= strongest) {
        answer += Math.floor(hp / strongest);
        hp %= strongest;
    }
    if(hp >= strong) {
        answer += Math.floor(hp / strong);
        hp %= strong;
    }
    answer += hp;
    return answer;
}