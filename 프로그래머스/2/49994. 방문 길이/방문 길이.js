function solution(dirs) {
    const visited = new Set();
    let x = 0, y = 0;

    const moves = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    };

    for (const dir of dirs) {
        const [dx, dy] = moves[dir];
        const nx = x + dx;
        const ny = y + dy;

        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        const path1 = `${x},${y}->${nx},${ny}`;
        const path2 = `${nx},${ny}->${x},${y}`;

        visited.add(path1);
        visited.add(path2);

        x = nx;
        y = ny;
    }

    return visited.size / 2;
}
