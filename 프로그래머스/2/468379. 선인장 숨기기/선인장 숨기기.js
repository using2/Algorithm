function solution(m, n, h, w, drops) {
    const order = Array.from({ length: m }, () => Array(n).fill(Infinity));

    for (let i = 0; i < drops.length; i++) {
        const [r, c] = drops[i];
        order[r][c] = i + 1;
    }

    const rowMin = Array.from({ length: m }, () => Array(n - w + 1));

    for (let r = 0; r < m; r++) {
        let deque = [];
        let head = 0;

        for (let c = 0; c < n; c++) {
            while (
                deque.length > head &&
                order[r][deque[deque.length - 1]] >= order[r][c]
            ) {
                deque.pop();
            }

            deque.push(c);

            while (
                deque.length > head &&
                deque[head] <= c - w
            ) {
                head++;
            }

            if (c >= w - 1) {
                rowMin[r][c - w + 1] = order[r][deque[head]];
            }
        }
    }
    
    const rectMin = Array.from({ length: m - h + 1 }, () => Array(n - w + 1));

    for (let c = 0; c < n - w + 1; c++) {
        let deque = [];
        let head = 0;
        
        for(let r = 0; r < m; r++) {
            while(deque.length > head &&
                  rowMin[deque[deque.length - 1]][c] >= rowMin[r][c]) {
                deque.pop();
            }
            
            deque.push(r);
            
            while(deque.length > head &&
                 deque[head] <= r - h) head++;
            
            if(r >= h - 1) {
                rectMin[r - h + 1][c] = rowMin[deque[head]][c];
            } 
        }
    }
    
    let bestValue = -1;
    let answer = [0, 0];

    for (let r = 0; r < m - h + 1; r++) {
        for (let c = 0; c < n - w + 1; c++) {
            const value = rectMin[r][c];

            if (value > bestValue) {
                bestValue = value;
                answer = [r, c];
            }
        }
    }

    return answer;
}