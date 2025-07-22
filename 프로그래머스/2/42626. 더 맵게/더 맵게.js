class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    insert(num) {
        this.heap.push(num);
        
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);
        
        while(par > 0 && this.heap[par] > this.heap[cur]) {
            [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];
            cur = par;
            par = Math.floor(cur / 2);
        }
    }
    
    top() {
        return this.heap[1];
    }
    
    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();
        
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let cur = 1;
        let left = 2;
        let right = 3;
        
        while(
            (this.heap[left] && this.heap[cur] > this.heap[left]) || 
            (this.heap[right] && this.heap[cur] > this.heap[right])
        ) {
            let minChild = left;

            if (this.heap[right] && this.heap[left] > this.heap[right]) {
                minChild = right;
            }
            
            [this.heap[minChild], this.heap[cur]] = [this.heap[cur], this.heap[minChild]];
            cur = minChild;
            left = cur * 2;
            right = cur * 2 + 1;
        }
        
        return min;
    }
}

function solution(scoville, K) {
    var answer = 0;
    
    const heap = new MinHeap();
    scoville.forEach(e => heap.insert(e));
    
    while(heap.top() < K) {
        let first = heap.pop();
        let second = heap.pop();
        if(first === null || second === null) return -1;
        let newScoville = first + (second * 2);
        
        heap.insert(newScoville);
        answer++;
    }
    
    return answer;
}