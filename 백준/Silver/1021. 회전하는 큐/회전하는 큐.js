const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const [N, M] = input[0].split(' ').map(Number);
    const targets = input[1].split(' ').map(Number);

    let queue = Array.from({ length: N }, (_, i) => i + 1);
    let count = 0;

    for (let target of targets) {
        let idx = queue.indexOf(target);
        if (idx <= Math.floor(queue.length / 2)) {
            while (queue[0] !== target) {
                queue.push(queue.shift());
                count++;
            }
        } else {
            while (queue[0] !== target) {
                queue.unshift(queue.pop());
                count++;
            }
        }
        queue.shift();
    }

    console.log(count);
});
