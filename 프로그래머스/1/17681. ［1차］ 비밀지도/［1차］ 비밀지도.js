function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < n; i++) {
        let ans = [];
        let A = arr1[i].toString(2);
        let B = arr2[i].toString(2);
        
        if(A.length < n) A = "0".repeat(n - A.length) + A;
        if(B.length < n) B = "0".repeat(n - B.length) + B;
        
        
        for(let j = 0; j < n; j++) {
            if(A[j] === "0" && B[j] === "0") ans.push(' ');
            else ans.push('#');
        }
        answer.push(ans.join(''));
    }
    
    return answer;
}