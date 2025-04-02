const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class AbsMinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop()[1];

    const min = this.heap[0][1];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this._compare(this.heap[idx], this.heap[parentIdx]) < 0) {
        [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  _heapifyDown() {
    let idx = 0;
    let length = this.heap.length;
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (leftIdx < length && this._compare(this.heap[leftIdx], this.heap[smallest]) < 0) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this._compare(this.heap[rightIdx], this.heap[smallest]) < 0) {
        smallest = rightIdx;
      }
      if (smallest !== idx) {
        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      } else {
        break;
      }
    }
  }

  _compare(a, b) {
    if (a[0] !== b[0]) return a[0] - b[0]; // 절댓값 비교
    return a[1] - b[1]; // 값 비교
  }
}

let input = [];
rl.on("line", (line) => input.push(Number(line)))
  .on("close", () => {
    const n = input[0];
    const heap = new AbsMinHeap();
    let result = [];

    for (let i = 1; i <= n; i++) {
      if (input[i] === 0) {
        result.push(heap.pop());
      } else {
        heap.push([Math.abs(input[i]), input[i]]);
      }
    }

    console.log(result.join("\n"));
  });
