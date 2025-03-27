const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    pop() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let largestIdx = idx;

            if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largestIdx]) {
                largestIdx = leftIdx;
            }
            if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largestIdx]) {
                largestIdx = rightIdx;
            }
            if (largestIdx === idx) break;

            [this.heap[idx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[idx]];
            idx = largestIdx;
        }
        return maxValue;
    }
}

const maxHeap = new MaxHeap();
const N = input[0];
let result = [];

for (let i = 1; i <= N; i++) {
    if (input[i] === 0) {
        result.push(maxHeap.pop());
    } else {
        maxHeap.push(input[i]);
    }
}

console.log(result.join('\n'));
