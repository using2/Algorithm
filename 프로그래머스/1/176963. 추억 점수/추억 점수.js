function solution(name, yearning, photo) {
    var answer = [];
    let mis = {};
    
    name.forEach((e, i) => {
        mis[e] = yearning[i];
    })
    
    for(let i = 0; i < photo.length; i++) {
        let score = 0;
        photo[i].forEach(e => {
            if(mis[e] !== undefined) score += mis[e];
        })
        answer.push(score);
    }
    
    return answer;
}