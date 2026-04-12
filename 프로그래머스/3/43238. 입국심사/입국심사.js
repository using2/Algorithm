function solution(n, times) {
    var answer = 0;
    
    let left = 0;
    let right = Math.max(...times) * n;
    let mid = Math.floor((right + left) / 2);
    
    while(right !== left) {        
        const count = times.reduce((acc, t) => acc + Math.floor(mid / t), 0);
        
        if(count >= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((right + left) / 2);
    }
    
    return mid;;
}