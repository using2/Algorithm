function solution(n, results) {
    const graph = Array.from({ length: n }, () => Array(n).fill(false));
    
    for (let [a, b] of results) {
        graph[a - 1][b - 1] = true;
    }
    
    // 플로이드-워셜
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = true;
                }
            }
        }
    }
    
    let answer = 0;
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        
        for (let j = 0; j < n; j++) {
            if (graph[i][j] || graph[j][i]) {
                count++;
            }
        }
        
        if (count === n - 1) answer++;
    }
    
    return answer;
}