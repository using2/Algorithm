function solution(n) {
    var answer = 0;
    
    for (let a = 1; a <= Math.sqrt(n); a++) {
        if (n % a === 0) { 
            let b = n / a;
            if (a === b) {
                answer++;
            } else {
                answer += 2; 
            }
        }
    }
    
    return answer;
}