function solution(N, stages) {
    var answer = [];
    let fail = [];
    
    stages = stages.sort((a,b) => a-b);
    
    for(let i = 1; i <= N; i++) {
        let count = stages.filter(e => e >= i).length;
        let notSol = 0;
        let index = stages.indexOf(i);
        let lastIndex = stages.lastIndexOf(i);
        
        if(index === -1) notSol = 0;
        else if(lastIndex !== index) {
            notSol = lastIndex - index + 1;
        } else if(lastIndex === index) {
            notSol = 1;
        }
        
        let info = {};
        
        if(count === 0 || notSol === 0) {
            info["i"] = i;
            info["f"] = 0;
            fail.push(info);
        } else {
            info["i"] = i;
            info["f"] = notSol/count;
            fail.push(info);
        }
    }
    
    let res = fail.sort((a,b) => b["f"] - a["f"]);
    answer = res.map((e) => e["i"]);
    
    return answer;
}