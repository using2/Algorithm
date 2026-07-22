function solution(A, B) {
    var answer = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let a = 0;
    let b = 0;
    
    while(b < B.length) {
        if(A[a] < B[b]) {
            a++;
            b++;
            answer++;
        } else {
            b++
        }
    }
    
    return answer;
}