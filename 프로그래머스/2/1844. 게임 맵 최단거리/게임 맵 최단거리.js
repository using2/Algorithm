function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    const visit = Array.from({ length: n }, () => Array(m).fill(false));

    const queue = [[0, 0, 1]];
    visit[0][0] = true;

    while (queue.length > 0) {
        const [x, y, length] = queue.shift();

        if (x === n - 1 && y === m - 1) return length;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visit[nx][ny] && maps[nx][ny] === 1) {
                visit[nx][ny] = true;
                queue.push([nx, ny, length + 1]);
            }
        }
    }

    return -1;
}
