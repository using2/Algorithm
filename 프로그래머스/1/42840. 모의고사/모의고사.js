function solution(answers) {
    var answer = [];
    
    let number = [
        {
            num : [1, 2, 3, 4, 5],
            score : 0,
            name : 1
        },
        {
            num : [2, 1, 2, 3, 2, 4, 2, 5],
            score: 0,
            name: 2
        },
        {
            num : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            score : 0,
            name: 3
        }
    ];
    
    for(let i = 0; i < answers.length; i++) {
        let ans = answers[i];
        
        number.forEach((e) => {
            let mod = e["num"].length;
            if(e["num"][i % mod] === ans) e["score"]++;
        });
    }
    
    number = number.sort((a,b) => -(a["score"] - b["score"]));
    let max = number[0]["score"];
    
    number.forEach((e, i) => {
        if(number[i]["score"] === max) answer.push(number[i]["name"]);
    })
    
    answer = answer.sort();
    
    return answer;
}