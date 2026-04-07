function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    
    for (let [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const dist = Array(n + 1).fill(-1);
    dist[1] = 0;
    
    const queue = [1];
    let start = 0;
    
    while(queue.length > start) {
        let cur = queue[start++];
        
        for(let next of graph[cur]) {
            if (dist[next] === -1) {
                dist[next] = dist[cur] + 1;
                queue.push(next);
            }
        }
    }
    
    let max = Math.max(...dist);
    
    return dist.filter((e) => e === max).length;
}