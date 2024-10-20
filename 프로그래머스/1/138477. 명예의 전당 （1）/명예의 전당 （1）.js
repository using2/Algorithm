function solution(k, score) {
    var answer = [];
    let min = 2001;
    let price = [];
    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            if(min > score[i]) min = score[i];
            answer.push(min);
            price.push(score[i]);
            continue;
        }
        
        if(min < score[i]) {
            let index = price.indexOf(min);
            price.splice(index, 1);
            price.push(score[i]);
            min = price.sort((a, b) => -(a-b))[k-1];
        }
        answer.push(min);
    }
    
    return answer;
}