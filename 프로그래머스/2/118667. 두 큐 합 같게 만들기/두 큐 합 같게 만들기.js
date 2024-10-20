function solution(queue1, queue2) {
    const startS1 = queue1.reduce((acc, cur) => acc + cur, 0);
    const startS2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let sum1 = startS1;
    let sum2 = startS2;
    const targetSum = (sum1 + sum2) / 2;
    let cnt = 0;
    
    if (!Number.isInteger(targetSum)) return -1;

    const combinedQueue = [...queue1, ...queue2];
    let idx1 = 0, idx2 = queue1.length;

    const maxOps = combinedQueue.length * 2;
    while (cnt < maxOps) {
        if (sum1 === targetSum && sum2 === targetSum) return cnt;

        if (sum1 > sum2) {
            const num = combinedQueue[idx1++];
            sum1 -= num;
            sum2 += num;
        } else {
            const num = combinedQueue[idx2++];
            sum2 -= num;
            sum1 += num;
        }
        
        cnt++;
    }

    return -1; 
}