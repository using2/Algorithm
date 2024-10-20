function solution(n) {
    var answer = 1;
    
    function isPrime(num) {
        if(num === 2) return true;
        
        if(num % 2 === 0 && num !== 2) return false;
        if(num % 3 === 0 && num !== 3) return false;
        if(num % 7 === 0 && num !== 7) return false;
        
        let sqrt = Math.floor(Math.sqrt(num));
    
        for(let i = 2; i <= sqrt; i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    for(let i = 3; i <= n; i++) {
        if(isPrime(i)) answer++;
    }
    
    return answer;
}