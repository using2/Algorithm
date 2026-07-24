class Heap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.isEmpty()) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];

        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);

        return top;
    }

    _bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);

            if (this.heap[parent][0] <= this.heap[idx][0]) break;

            [this.heap[parent], this.heap[idx]] =
                [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    _bubbleDown(idx) {
        while (true) {
            let l = idx * 2 + 1;
            let r = idx * 2 + 2;
            let small = idx;

            if (l < this.heap.length && this.heap[l][0] < this.heap[small][0]) small = l;

            if (r < this.heap.length && this.heap[r][0] < this.heap[small][0]) small = r;

            if (small === idx) break;

            [this.heap[idx], this.heap[small]] =
                [this.heap[small], this.heap[idx]];

            idx = small;
        }
    }
}

function solution(N, road, K) {
    var answer = 0;

    let graph = Array.from({ length: N }, () => []);
    
    road.forEach(([i, j, dist]) => {
        graph[i - 1].push([j - 1, dist]);
        graph[j - 1].push([i - 1, dist]);
    });
    
    function dijkstra(start) {
        let dist = Array(N + 1).fill(Infinity);

        dist[start] = 0;

        let heap = new Heap();
        heap.push([0, start]);

        while (!heap.isEmpty()) {
            let [cost, now] = heap.pop();

            if (cost > dist[now]) continue;

            for (const [next, weight] of graph[now]) {
                let nextCost = cost + weight;

                if (nextCost < dist[next]) {
                    dist[next] = nextCost;
                    heap.push([nextCost, next]);
                }
            }
        }

        return dist;
    }
    
    answer = dijkstra(0).reduce((acc, cur) => {
        if(cur <= K) return acc + 1;
        return acc;
    }, 0);

    return answer;
}