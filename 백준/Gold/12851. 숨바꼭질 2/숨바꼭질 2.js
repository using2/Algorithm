const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  push(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  shift() {
    if (this.head === this.tail) return null;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  get length() {
    return this.tail - this.head;
  }
}


function solution(n, k) {
  if (n === k) {
    console.log(0);
    console.log(1);
    return;
  }

  let ans = 0;
  let visited = new Array(100001).fill(-1);
  let queue = new Queue();

  queue.push(n);
  visited[n] = 0;

  while (queue.length) {
    let cur = queue.shift();

    if (cur === k) {
      ans += 1;
    }

    for (let next of [cur * 2, cur - 1, cur + 1]) {
      if (next < 0 || next > 100000) continue;

      if (visited[next] === -1 || visited[next] === visited[cur] + 1) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  console.log(visited[k]);
  console.log(ans);
}

let input = [];

rl.on('line', (line) => input.push(line.split(' ').map(Number)))
    .on('close', () => {
      let [n, k] = input[0];
      solution(n, k);
    });
