function solution(l, r) {
    const result = [];
    
    function generate(current) {
        if (current !== "" && !result.includes(parseInt(current))) {
            const num = parseInt(current);
            if (num > r) return;
            if (num >= l) result.push(num)
        }
        
        if (current.length < String(r).length) {
            generate(current + "0");
            generate(current + "5");
        }
    }
    
    generate("");
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}
