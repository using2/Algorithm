function solution(lines) {
    let answer = 0;
    let line = new Array(201).fill(0);
    
    lines.forEach((l) => {
        let [start, end] = l.map(e => e + 100);
        for(let i = start; i < end; i++) {
            line[i] += 1;
        }
    })
    
    line.forEach((l) => {
        if(l > 1) answer++;
    })
    
    return answer;
}
