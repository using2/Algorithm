function solution(data, col, row_begin, row_end) {
    var answer = Infinity;
    
    data.sort((a, b) => {
        if(a[col - 1] === b[col - 1]) return b[0] - a[0];
        return a[col - 1] - b[col - 1];
    })
    
    for(let i = row_begin - 1; i < row_end; i++) {
        let s_i = data[i].reduce((acc, cur) => {
            return acc + (cur % (i + 1));
        }, 0);
        
        if(answer === Infinity) answer = s_i;
        else answer ^= s_i;
    }
    
    return answer;
}