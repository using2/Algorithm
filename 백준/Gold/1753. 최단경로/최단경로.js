const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [V, E] = input[0].split(" ").map(Number);
  const K = Number(input[1]);

  const graph = Array.from({ length: V + 1 }, () => []);
  for (let i = 2; i < E + 2; i++) {
    const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([v, w]);
  }

  class MinHeap {
    constructor() {
      this.heap = [];
    }
    push(item) {
      this.heap.push(item);
      this._bubbleUp();
    }
    pop() {
      if (this.size() === 1) return this.heap.pop();
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown();
      return top;
    }
    size() {
      return this.heap.length;
    }
    _bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.heap[parent][1] <= this.heap[idx][1]) break;
        [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        idx = parent;
      }
    }
    _bubbleDown() {
      let idx = 0;
      const lastIdx = this.heap.length - 1;
      while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        let smallest = idx;

        if (left <= lastIdx && this.heap[left][1] < this.heap[smallest][1]) {
          smallest = left;
        }
        if (right <= lastIdx && this.heap[right][1] < this.heap[smallest][1]) {
          smallest = right;
        }
        if (smallest === idx) break;
        [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
        idx = smallest;
      }
    }
  }

  const dist = Array(V + 1).fill(Infinity);
  dist[K] = 0;

  const pq = new MinHeap();
  pq.push([K, 0]);

  while (pq.size() > 0) {
    const [cur, curDist] = pq.pop();

    if (dist[cur] < curDist) continue;

    for (const [next, w] of graph[cur]) {
      if (dist[next] > curDist + w) {
        dist[next] = curDist + w;
        pq.push([next, dist[next]]);
      }
    }
  }

  let result = "";
  for (let i = 1; i <= V; i++) {
    result += (dist[i] === Infinity ? "INF" : dist[i]) + "\n";
  }
  console.log(result.trim());
});
