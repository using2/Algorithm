function solution(n, s, a, b, fares) {
    const graph = Array.from({ length: n + 1 }, () => []);
    fares.forEach(([c, d, f]) => {
        graph[c].push([d, f]);
        graph[d].push([c, f]);
    });
    
    function dijkstra(start) {
        const dist = Array(n + 1).fill(Infinity);
        dist[start] = 0;
        const pq = [[0, start]]; 
        
        while (pq.length) {
            const [currentCost, currentNode] = heapqPop(pq);
            if (dist[currentNode] < currentCost) continue;

            for (const [nextNode, cost] of graph[currentNode]) {
                const nextCost = currentCost + cost;
                if (nextCost < dist[nextNode]) {
                    dist[nextNode] = nextCost;
                    heapqPush(pq, [nextCost, nextNode]);
                }
            }
        }

        return dist;
    }

    function heapqPop(pq) {
        pq.sort((a, b) => a[0] - b[0]); 
        return pq.shift();
    }

    function heapqPush(pq, element) {
        pq.push(element);
    }

    const distFromS = dijkstra(s);
    const distFromA = dijkstra(a);
    const distFromB = dijkstra(b);

    let minFare = Infinity;
    for (let i = 1; i <= n; i++) {
        const totalFare = distFromS[i] + distFromA[i] + distFromB[i];
        minFare = Math.min(minFare, totalFare);
    }

    return minFare;
}