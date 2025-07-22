class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    
    insert(num) {
        this.heap.push(num);
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);
        
        while(par > 0 && this.heap[par] < this.heap[cur]) {
            [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];
            cur = par;
            par = Math.floor(cur / 2);
        }
    }
    
    maxHeap() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let cur = 1;
        let left = 2;
        let right = 3;
        
        while((this.heap[left] && this.heap[cur] < this.heap[left]) || (this.heap[right] && this.heap[cur] < this.heap[right])) {
            let maxChild = left;
            
            if(this.heap[right] && this.heap[left] < this.heap[right]) maxChild = right;
            
            [this.heap[cur], this.heap[maxChild]] = [this.heap[maxChild], this.heap[cur]];
            cur = maxChild;
            left = cur * 2;
            right = cur * 2 + 1;
        }
        
        return max;
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }
}

function solution(n, works) {
    const heap = new MaxHeap();
    let totalWork = works.reduce((a, b) => a + b, 0);
    if (totalWork <= n) return 0;

    works.forEach(work => heap.insert(work));

    while (n > 0) {
        const max = heap.maxHeap();
        heap.insert(max - 1);
        n--;
    }

    let result = 0;
    while (!heap.isEmpty()) {
        const val = heap.maxHeap();
        result += val * val;
    }

    return result;
}
