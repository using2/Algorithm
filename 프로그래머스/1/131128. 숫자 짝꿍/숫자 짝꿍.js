function solution(X, Y) {
    var answer = '';
    
    let 짝꿍 = [];
    let x = {};
    let y = {};
        
    X.split("").forEach(e => x[e] = !x[e]? 1 : ++x[e]);
    Y.split("").forEach(e => y[e] = !y[e]? 1 : ++y[e]);
    
    Object.keys(x).forEach(e => {
        if(y[e]) {
            let cnt = y[e] > x[e]? x[e] : y[e];
            짝꿍 = 짝꿍.concat(new Array(cnt).fill(parseInt(e)));
        }
    });
    
    if(짝꿍.length === 0) return "-1";
    else if(짝꿍.every(e => e === 0)) return "0";
    else {
        return 짝꿍.sort((a, b) => b - a).join("");
    }
    
    return answer;
}