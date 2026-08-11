function solution(n, infection, edges, k) {
    var answer = 0;

    let graph = Array.from({ length: n + 1 }, () => []);

    edges.forEach(([x, y, type]) => {
        graph[x].push([y, type]);
        graph[y].push([x, type]);
    });

    let types = [1, 2, 3];

    function bfs(infected, type) {
        let queue = [...infected];
        let head = 0;
        let visited = new Set(infected);
        let result = [];

        while (queue.length > head) {
            let now = queue[head++];

            for (let [next, pipeType] of graph[now]) {
                if (pipeType !== type) continue;

                if (visited.has(next)) continue;

                result.push(next);
                visited.add(next);

                queue.push(next);
            }
        }

        return result;
    }

    function dfs(dep, prevType, infected) {
        if (dep === k) {
            answer = Math.max(answer, infected.size);
            return;
        }

        for (let type of types) {
            if (type === prevType) continue;
            
            let infections = bfs(infected, type);
            let nowInfected = new Set(infected);
            infections.forEach((e) => nowInfected.add(e));
            dfs(dep + 1, type, nowInfected);
        }
    }

    let infected = new Set([infection]);

    dfs(0, 0, infected);

    return answer;
}