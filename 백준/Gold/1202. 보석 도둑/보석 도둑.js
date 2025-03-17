const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    while (idx * 2 + 1 < this.heap.length) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let larger = left;
      if (right < this.heap.length && this.heap[right] > this.heap[left]) {
        larger = right;
      }
      if (this.heap[idx] >= this.heap[larger]) break;
      [this.heap[idx], this.heap[larger]] = [this.heap[larger], this.heap[idx]];
      idx = larger;
    }
    return max;
  }

  size() {
    return this.heap.length;
  }
}

function solution(jewel, bag) {
  let ans = 0;
  let pq = new MaxHeap(); 
    
  jewel.sort((a, b) => a[0] - b[0]);
  bag.sort((a, b) => a - b);

  let j = 0;

  for (let i = 0; i < bag.length; i++) {
    while (j < jewel.length && jewel[j][0] <= bag[i]) {
      pq.push(jewel[j][1]);
      j++;
    }

    if (pq.size() > 0) {
      ans += pq.pop();
    }
  }

  console.log(ans);
}

readline
    .on('line', function(line) {
        input.push(line.split(' ').map(e => parseInt(e)));
    })
    .on('close', function() {
        let jewelCnt = input[0][0];

        let jewel = input.slice(1, jewelCnt + 1);
        let bag = input.slice(jewelCnt + 1).map((e) => e[0]);

        solution(jewel, bag);
        process.exit();
    });
