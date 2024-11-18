function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    
    const count = {};
    for (let num of dice) {
        count[num] = (count[num] || 0) + 1;
    }

    const values = Object.values(count);
    
    if (values.length === 1) {
        return 1111 * dice[0];
    }
    
    if (values.length === 2 && values.includes(3)) {
        const p = Number(Object.keys(count).find(key => count[key] === 3));
        const q = Number(Object.keys(count).find(key => count[key] === 1));
        return Math.pow(10 * p + q, 2);
    }

    if (values.length === 2 && values.includes(2)) {
        const [p, q] = Object.keys(count).map(Number).sort((x, y) => x - y);
        return (p + q) * Math.abs(p - q);
    }
    
    if (values.length === 3) {
        const p = Number(Object.keys(count).find(key => count[key] === 2));
        const [q, r] = Object.keys(count).filter(key => count[key] === 1).map(Number);
        return q * r;
    }

    return Math.min(...dice);
}
