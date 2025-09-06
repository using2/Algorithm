const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const N = parseInt(input[0]);
  if (N === 1) {
    console.log(0);
    return;
  }

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    push(value) {
      this.heap.push(value);
      this._bubbleUp();
    }

    pop() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown();
      return min;
    }

    _bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }

    _bubbleDown() {
      let index = 0;
      const length = this.size();
      while (true) {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let smallest = index;

        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === index) break;
        [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
        index = smallest;
      }
    }
  }

  const heap = new MinHeap();
  for (let i = 1; i <= N; i++) {
    heap.push(parseInt(input[i]));
  }

  let ans = 0;
  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    let sum = first + second;
    ans += sum;
    heap.push(sum);
  }

  console.log(ans);
});
