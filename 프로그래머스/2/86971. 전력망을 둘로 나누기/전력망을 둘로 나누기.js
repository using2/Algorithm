function solution(n, wires) {
    var answer = Infinity;
    
    let graph = {};
    
    wires.forEach((wire) => {
        let [i, j] = wire;
        
        if(graph[i] === undefined) graph[i] = [];
        if(graph[j] === undefined) graph[j] = [];
        
        graph[i].push(j);
        graph[j].push(i);
    })
    
    function dfs(start, cut) {
        let stack = [start];
        let visit = Array(n).fill(0);
        visit[start] = true;
        let cnt = 0;
        
        while(stack.length) {
            let now = stack.pop();
            cnt++;
            
            for(let next of graph[now]) {
                if(!visit[next] && next !== cut) {
                    visit[next] = true;
                    stack.push(next);
                }
            }
        }
        
        return cnt;
    }
    
    wires.forEach((wire) => {
        let [i, j] = wire;
        
        let a = dfs(i, j);
        let b = dfs(j, i);
        
        answer = Math.min(answer, Math.abs(a - b));
    })
    
    return answer;
}