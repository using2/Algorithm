function solution(order) {
    const n = order.length;
    const container = Array(n).fill(0).map((e, i) => i + 1); 
    const sub = [];
    
    let i = 0; 
    let idx = 0;

    while (idx < n) {
        if (i < n && container[i] === order[idx]) {
            i++;
            idx++;
        } else if (sub.length && sub[sub.length - 1] === order[idx]) {
            sub.pop();
            idx++;
        } else if (i < n) {
            sub.push(container[i]);
            i++;
        } else {
            break;
        }
    }

    return idx;
}
