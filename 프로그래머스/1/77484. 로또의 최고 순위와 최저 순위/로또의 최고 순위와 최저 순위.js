function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    let possibleCnt = 0;
    let rank = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6};
    for(let i = 0; i < 6; i++) {
        if(win_nums.includes(lottos[i])) cnt++;
        if(lottos[i] === 0) possibleCnt++;
    }
    answer.push(rank[cnt+possibleCnt]);
    answer.push(rank[cnt]);
    return answer;
}