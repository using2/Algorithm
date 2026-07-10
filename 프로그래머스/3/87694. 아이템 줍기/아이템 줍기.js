function solution(rectangle, characterX, characterY, itemX, itemY) {
    let graph = Array.from({ length: 101 }, () => Array(101).fill(0));

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    rectangle.forEach(([ldx, ldy, rux, ruy]) => {
        ldx *= 2;
        ldy *= 2;
        rux *= 2;
        ruy *= 2;

        for (let y = ldy; y <= ruy; y++) {
            for (let x = ldx; x <= rux; x++) {
                graph[y][x] = 1;
            }
        }
    });

    rectangle.forEach(([ldx, ldy, rux, ruy]) => {
        ldx *= 2;
        ldy *= 2;
        rux *= 2;
        ruy *= 2;

        for (let y = ldy + 1; y < ruy; y++) {
            for (let x = ldx + 1; x < rux; x++) {
                graph[y][x] = 0;
            }
        }
    });

    const visit = Array.from({ length: 101 }, () => Array(101).fill(false));

    function bfs() {
        const queue = [];
        let head = 0;

        visit[characterY][characterX] = true;
        queue.push([characterX, characterY, 0]);

        while (head < queue.length) {
            const [x, y, dist] = queue[head++];

            if (x === itemX && y === itemY) {
                return dist / 2;
            }

            for (const [nx, ny] of [
                [x + 1, y],
                [x - 1, y],
                [x, y + 1],
                [x, y - 1],
            ]) {
                if (nx < 0 || ny < 0 || nx >= 101 || ny >= 101) continue;

                if (!visit[ny][nx] && graph[ny][nx] === 1) {
                    visit[ny][nx] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }

    return bfs();
}