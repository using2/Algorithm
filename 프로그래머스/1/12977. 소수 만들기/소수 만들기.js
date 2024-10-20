function solution(nums) {
    var answer = 0;
    
    function isPrime(num){
        if(num === 2) return true;
        
        let sqrt = Math.floor(Math.sqrt(num));
        for(let i = 2; i <= sqrt; i++){
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    function comb(start, visit, r){
        if(r === 3){
            let index = [];
            visit.forEach((e, i) => {
                if(e === 1) index.push(i);
            });
            
            let result = nums[index[0]] + nums[index[1]] + nums[index[2]];
            if(isPrime(result)) answer++;
            return;
        }
        
        for(let i = start; i < nums.length; i++){
            if(visit[i] === 1) continue;
            visit[i] =1;
            comb(i, visit, r + 1);
            visit[i] = 0;
        }
    }
    let visit = new Array(nums.length).fill(0);
    comb(0, visit, 0);
    
    return answer;
}