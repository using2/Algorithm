function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let head = 0;

    while (head < queue.length) {
        const [cur, count] = queue[head++];

        if (cur === y) return count;
        if (visited.has(cur)) continue;
        visited.add(cur);

        if (cur + n <= y) queue.push([cur + n, count + 1]);
        if (cur * 2 <= y) queue.push([cur * 2, count + 1]);
        if (cur * 3 <= y) queue.push([cur * 3, count + 1]);
    }

    return -1;
}
