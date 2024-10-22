function solution(citations) {
    var answer = 0;
    
    for(let i = citations.length - 1; i >= 0; i--){
        if(cnt(citations, i + 1) >= i + 1) {
            return i + 1;
        }
    }
    
    return answer;
}

function cnt(arr, num) {
    return arr.filter(e => e >= num).length;
}