class Heap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return min;
    }

    peek() {
        return this.heap[0];
    }

    bubbleUp(index) {
        while (index > 0) {
            const par = Math.floor((index - 1) / 2);

            if (this.heap[par] <= this.heap[index]) break;

            [this.heap[par], this.heap[index]] =
                [this.heap[index], this.heap[par]];

            index = par;
        }
    }

    bubbleDown(index) {
        const n = this.heap.length;

        while (true) {
            let l = index * 2 + 1;
            let r = index * 2 + 2;
            let small = index;

            if (
                l < n &&
                this.heap[l] < this.heap[small]
            ) {
                small = l;
            }

            if (
                r < n &&
                this.heap[r] < this.heap[small]
            ) {
                small = r;
            }

            if (small === index) break;

            [this.heap[index], this.heap[small]] =
                [this.heap[small], this.heap[index]];

            index = small;
        }
    }
}

function solution(n, k, enemy) {
    var answer = 0;
    
    let heap = new Heap();
    
    for(let i = 0; i < enemy.length; i++) {
        heap.push(enemy[i]);
        
        if(heap.size() > k) {
            let small = heap.pop();
            
            n -= small;
            
            if(n < 0) return i;
        }
    }
    
    return enemy.length;
}