class PQ {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    size() {
        return this.heap.length;
    }
    
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        let top = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this._bubbleDown(0);
        return top;
    }
    
    _bubbleUp(idx) {
        while(idx > 0) {
            let par = Math.floor((idx - 1) / 2);
            let cur = this.heap[idx];
            let parNode = this.heap[par];
            
            if(this.compare(cur, parNode) < 0) {
                [this.heap[idx], this.heap[par]] = [this.heap[par], this.heap[idx]];
                idx = par;
            } else break;
        }
    }
    
    _bubbleDown(idx) {
        while(true) {
            let l = idx * 2 + 1;
            let r = idx * 2 + 2;
            let max = idx;
            
            if(this.size() > l && this.compare(this.heap[l], this.heap[max]) < 0) max = l;
            if(this.size() > r && this.compare(this.heap[r], this.heap[max]) < 0) max = r;
            if(max === idx) break;
            
            [this.heap[max], this.heap[idx]] = [this.heap[idx], this.heap[max]];
            idx = max;
        }
    }
}

function solution(jobs) {
    let n = jobs.length;
    var answer = 0;
    
    jobs = jobs.map((val, idx) => [...val, idx]);
    jobs.sort((a, b) => b[0] - a[0]);
    
    function compare(a, b) {
        if(a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            if(a[0] !== b[0]) {
                return a[0] - b[0];
            } else {
                return a[2] - b[2];
            }
        }
    }
    
    const pq = new PQ(compare);
    let start = jobs.pop();
    pq.push(start);
    let time = start[0];
    
    while(jobs.length || pq.size()) {
        if(pq.size() === 0) time++;
        else {
            let curJob = pq.pop();
            time = time + curJob[1];  // 현재시각 + 소요시간 = 끝나는 시각
            answer += time - curJob[0];  // 끝난시각 - 요청시각
        }
        
        while(jobs.length && jobs[jobs.length - 1][0] <= time) {
            pq.push(jobs.pop());
        }
    }
    
    return Math.floor(answer / n);
}