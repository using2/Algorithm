function solution(survey, choices) {
    var answer = '';
    const disagree = { 1: 3, 2: 2, 3: 1 };
    const agree = { 3: 3, 2: 2, 1: 1 };
    const idk = 4;
    const category = { 
        "R": 0, 
        "T": 0, 
        "C": 0, 
        "F": 0, 
        "J": 0, 
        "M": 0, 
        "A": 0, 
        "N": 0 
    };
    const characteristic = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
    
    survey.forEach((s, i) => {
        const surv = s.split("");
        const choice = choices[i];
        if(choice > idk) category[surv[1]] += agree[choice % idk];
        else if(choice < idk) category[surv[0]] += disagree[choice % idk];
    });
    
    characteristic.forEach((c) => {
        const character = category[c[0]] >= category[c[1]]? c[0] : c[1];
        answer += character;
    })
    
    return answer;
}