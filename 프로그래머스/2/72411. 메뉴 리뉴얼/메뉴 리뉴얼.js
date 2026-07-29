function solution(orders, course) {
    var answer = [];
    
    // combination으로 풀면 시간 복잡도가 nCr
    // (10C1 + 10C2 + ... + 10C10) * 20
    // = (2^10 - 10C0) * 20
    // = (1024 - 1) * 20
    // = 1023 * 20
    // 이므로 조합으로 풀어도 괜찮은 제한 사항임
    
    let map = new Map();
    
    let check = 0;
    course.forEach(c => check = check | (1 << c));
    
    function comb(cur, idx, order) {
        if ((check & (1 << cur.length)) !== 0) {
            const key = cur.join("");
            map.set(key, (map.get(key) || 0) + 1);
        }

        for (let i = idx; i < order.length; i++) {
            cur.push(order[i]);
            comb(cur, i + 1, order);
            cur.pop();
        }   
    }   
   
    orders.forEach(order => {
        order = order.split("").sort().join("");
        comb([], 0, order);
    });
    
    const maxCount = new Map();

    for (const [key, cnt] of map) {
        if (cnt < 2) continue;
        const len = key.length;
        maxCount.set(len, Math.max(maxCount.get(len) || 0, cnt));
    }
    
    for (const [key, cnt] of map) {
        if (cnt === maxCount.get(key.length)) {
            answer.push(key);
        }
    }
    
    answer.sort();
    
    return answer;
}