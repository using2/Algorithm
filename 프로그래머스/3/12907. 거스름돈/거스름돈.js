function solution(n, money) {
    var answer = new Array(n + 1).fill(0); 
    answer[0] = 1; 

    for (let coin of money) {
        for (let i = coin; i <= n; i++) {
            answer[i] += answer[i - coin]; 
        }
    }
    
    return answer[n] % 1000000007; 
}