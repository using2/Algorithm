function solution(begin, target, words) {
    var answer = 0;
    
    function canConvert(a, b) {
        return a.split('').filter((c, i) => c !== b[i]).length === 1;
    }
    
    let queue = [[begin, 0]];
    let start = 0;
    let visit = new Set(begin);
    
    while(queue.length > start) {
        let [cur, dist] = queue[start++];
        
        if(cur === target) return dist;
        
        for(let next of words) {
            if(!visit.has(next) && canConvert(cur, next)) {
                queue.push([next, dist + 1]);
                visit.add(next);
            }
            
        }
    }
    
    return 0;
}