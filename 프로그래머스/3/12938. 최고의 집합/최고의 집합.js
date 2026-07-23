function solution(n, s) {
    var answer = [];
    
    if (s === 1 && n > 1) return [-1];
    if (s < n) return [-1];
    
    answer = Array(n).fill(Math.floor(s / n));
    
    s %= n;
    
    for(let i = 0; i < s; i++) answer[i]++;
    
    answer.sort((a, b) => a - b);
    
    return answer;
}