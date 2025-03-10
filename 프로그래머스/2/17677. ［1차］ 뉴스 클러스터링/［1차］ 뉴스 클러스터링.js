function solution(str1, str2) {
    var answer = 0;
    
    let set1 = [];
    str1.split(/[^a-zA-Z]+/).filter(Boolean).map(e => e.toLowerCase()).forEach(e => {
        for(let i = 0; i < e.length - 1; i++) {
            set1.push(e[i] + e[i+1]);
        }
    });
    let set2 = [];
    str2.split(/[^a-zA-Z]+/).filter(Boolean).map(e => e.toLowerCase()).forEach(e => {
        for(let i = 0; i < e.length - 1; i++) {
            set2.push(e[i] + e[i+1]);
        }
    });
    
    if(set1.length === 0 && set2.length === 0) return 65536;
    
    let shorterSet = set1.length > set2.length? set2 : set1;
    let longerSet = set1.length > set2.length? set1 : set2;
    
    let 교 = 0;
    let 합 = set1.length + set2.length;
    
    shorterSet.forEach(e => {
        if(longerSet.includes(e)) {
            let idx = longerSet.indexOf(e);
            longerSet.splice(idx, 1);
            교++;
        }
    });
    
    합 -= 교;
    
    answer = Math.floor((교 / 합) * 65536);
    
    return answer;
}
