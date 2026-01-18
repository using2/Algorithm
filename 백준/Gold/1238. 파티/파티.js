const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let idx = 0;
  const [N, M, X] = input[idx++].split(' ').map(Number);

  const graph = Array.from({ length: N + 1 }, () => []);
  const rgraph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [a, b, c] = input[idx++].split(' ').map(Number);
    graph[a].push([b, c]);
    rgraph[b].push([a, c]);
  }

  class MinHeap {
    constructor() { this.h = []; }
    push(v) {
      this.h.push(v);
      let i = this.h.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.h[p][0] <= this.h[i][0]) break;
        [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
        i = p;
      }
    }
    pop() {
      if (this.h.length === 1) return this.h.pop();
      const top = this.h[0];
      this.h[0] = this.h.pop();
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, s = i;
        if (l < this.h.length && this.h[l][0] < this.h[s][0]) s = l;
        if (r < this.h.length && this.h[r][0] < this.h[s][0]) s = r;
        if (s === i) break;
        [this.h[s], this.h[i]] = [this.h[i], this.h[s]];
        i = s;
      }
      return top;
    }
    get size() { return this.h.length; }
  }

  function dijkstra(start, g) {
    const dist = Array(N + 1).fill(Infinity);
    const pq = new MinHeap();
    dist[start] = 0;
    pq.push([0, start]);
    while (pq.size) {
      const [d, u] = pq.pop();
      if (d > dist[u]) continue;
      for (const [v, w] of g[u]) {
        const nd = d + w;
        if (nd < dist[v]) {
          dist[v] = nd;
          pq.push([nd, v]);
        }
      }
    }
    return dist;
  }

  const fromX = dijkstra(X, graph);
  const toX = dijkstra(X, rgraph);

  let ans = 0;
  for (let i = 1; i <= N; i++) {
    ans = Math.max(ans, fromX[i] + toX[i]);
  }

  console.log(ans.toString());
});
