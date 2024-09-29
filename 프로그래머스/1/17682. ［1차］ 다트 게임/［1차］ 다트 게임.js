function solution(dartResult) {
    var answer = 0;
    let ansArr = [0, 0, 0];
    let bonusNum = {
        "S": 1, "D": 2, "T": 3
    }
    for(let i = 0; i < 3; i++) {
        let input = dartResult.match(/\d{1,2}[SDT][*#]?/)[0]; 
        const [, score, bonus, opt] = input.match(/(\d{1,2})([SDT])([*#]?)/);
        let bonusToNum = bonusNum[bonus];
        ansArr[i] = parseInt(score) ** parseInt(bonusToNum);
        if(opt) {
            if(opt === "*") {
                ansArr[i] *= 2;
                if(i > 0) ansArr[i - 1] *= 2;
            } else {
                ansArr[i] *= -1;
            }
        }
        dartResult = dartResult.slice(input.length);
    }
    
    ansArr.forEach(s => {
        answer += s;
    });
    return answer;
}