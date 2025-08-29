const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on('line', (line) => {
    input.push(line.trim());
    if (input.length === 2) {
        const N = Number(input[0]);
        const A = input[1].split(' ').map(Number);
        const answer = Array(N).fill(-1);
        const stack = [];

        for (let i = 0; i < N; i++) {
            while (stack.length && A[stack[stack.length - 1]] < A[i]) {
                answer[stack.pop()] = A[i];
            }
            stack.push(i);
        }

        console.log(answer.join(' '));
        rl.close();
    }
});
