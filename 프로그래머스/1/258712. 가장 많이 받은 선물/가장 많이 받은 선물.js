function solution(friends, gifts) {
    var answer = 0;
    let frds = [];
    let factor = {};
    let predict = {};
    for(let i of friends) {
        let person = i;
        let my = {
            me : i
        };
        for(let j of friends) {
            if(j !== i) {
                my[j] = 0;
            }
        }
        frds.push(my);
        factor[i] = 0;
        predict[i] = 0;
    }
    
    for(let i of gifts) {
        let divider = i.split(" ");
        for(let i in frds) {
            if(frds[i]["me"] === divider[0]) {
                frds[i][divider[1]]++;
            }
        }
    }
    
    for(let i in frds) {
        let key = Object.keys(frds[i]);
        for(let j = 0; j < key.length; j++) {
            if(key[j] !== "me") {
                factor[frds[i]["me"]] += frds[i][key[j]];
                factor[key[j]] -= frds[i][key[j]];   
            }
        }
    }
    
    for(let i in frds) {
        let key = Object.keys(frds[i]);
        for(let j = 1; j < key.length; j++) {
            let A = frds[i][key[j]];
            let B = 0;
            for(let finder in frds) {
                if(frds[finder]["me"] === key[j]) {
                    B = frds[finder][frds[i][key[0]]];
                }
            }
            console.log(A + "/" + B);
            if(A > B){
                predict[frds[i][key[0]]]++;
            } else if(A < B) {
                predict[key[j]]++;
            } else {
                if(factor[frds[i][key[0]]] > factor[key[j]]) predict[frds[i][key[0]]]++;
                else if(factor[frds[i][key[0]]] < factor[key[j]]) predict[key[j]]++;
            }
        }
    }
    
    let keys = Object.keys(predict);
    
    let max = 0;
    for(let i = 0; i < keys.length; i++) {
        if(max < predict[keys[i]]) max = predict[keys[i]];
    }
    answer = max/2;
    return answer;
}