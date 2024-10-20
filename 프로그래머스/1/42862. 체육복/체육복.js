function solution(n, lost, reserve) {
    var answer = 0;
    
    lost = lost.filter(l => {
        const index = reserve.indexOf(l);
        if (index !== -1) {
            reserve.splice(index, 1); 
            return false; 
        }
        return true; 
    });
    
    answer += n - lost.length;
    
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    
    while(lost.length != 0 && reserve.length != 0) {
        let res = reserve[reserve.length - 1];
        let los = lost[lost.length - 1];
        
        if(((res-'0') - 1 == (los-'0')) || ((res-'0') + 1 == (los-'0'))) {
            reserve.pop();
            lost.pop();
            answer += 1;
        }
        else if(res > los) reserve.pop();
        else lost.pop();
    }
    
    return answer;
}