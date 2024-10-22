function solution(s, skip, index) {
    let answer = '';
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    skip.split("").forEach(e => {
        alpha = alpha.replace(new RegExp(e, 'g'), '');
    });

    s.split("").forEach(e => {
        const idx = alpha.indexOf(e); 
        if (idx !== -1) {
            const newIdx = (idx + index) % alpha.length;
            answer += alpha[newIdx];
        }
    });

    return answer;
}