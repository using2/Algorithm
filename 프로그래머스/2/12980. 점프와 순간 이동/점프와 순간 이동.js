function solution(N) {
    let answer = 0;
    
    while (N > 0) {
        if (N % 2 === 1) {
            answer++;
            N--; 
        }
        N = N / 2;
    }
    
    return answer;
}