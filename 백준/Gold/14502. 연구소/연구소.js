const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', line => {
    input.push(line.trim());
}).on('close', () => {
    const [N, M] = input[0].split(' ').map(Number);
    const lab = input.slice(1).map(line => line.split(' ').map(Number));

    const empty = [];
    const virus = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (lab[i][j] === 0) empty.push([i, j]);
            if (lab[i][j] === 2) virus.push([i, j]);
        }
    }

    const comb = (arr, k) => {
        const result = [];
        const dfs = (start, path) => {
            if (path.length === k) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                dfs(i + 1, path);
                path.pop();
            }
        };
        dfs(0, []);
        return result;
    };

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const bfs = (tempLab) => {
        const q = [...virus.map(v => [...v])];

        while (q.length) {
            const [x, y] = q.shift();
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (0 <= nx && nx < N && 0 <= ny && ny < M && tempLab[nx][ny] === 0) {
                    tempLab[nx][ny] = 2;
                    q.push([nx, ny]);
                }
            }
        }

        let safe = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (tempLab[i][j] === 0) safe++;
            }
        }
        return safe;
    };

    let maxSafe = 0;
    const wallComb = comb(empty, 3);

    for (const walls of wallComb) {
        const tempLab = lab.map(row => [...row]);
        for (const [x, y] of walls) tempLab[x][y] = 1;
        maxSafe = Math.max(maxSafe, bfs(tempLab));
    }

    console.log(maxSafe);
});
