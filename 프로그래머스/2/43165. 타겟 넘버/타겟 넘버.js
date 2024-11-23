function solution(numbers, target) {
    let answer = 0;
    
    function dfs(idx, curSum) {
        if (idx === numbers.length) {
            if (curSum === target) {
                answer++;
            }
            return;
        }
        
        dfs(idx + 1, curSum + numbers[idx]);
        dfs(idx + 1, curSum - numbers[idx]);
    }
    
    dfs(0, 0);
    
    return answer;
}