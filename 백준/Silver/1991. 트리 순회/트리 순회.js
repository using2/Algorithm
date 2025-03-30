const readline = require('readline');

const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

let input = [];

class TreeNode {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

rl.on('line', (line) => {
    input.push(line.split(' '));
  }).on('close', () => {
    let n = parseInt(input[0]);
    let node = {};

    for(let i = 1; i <= n; i++) {
      node[input[i][0]] = new TreeNode(input[i][1], input[i][2]);
    }

    let result = [];

    function preOrder(n) {
      if(!node[n]) return;

      result.push(n);
      preOrder(node[n].left);
      preOrder(node[n].right);
    }
    
    function postOrder(n) {
      if(!node[n]) return;

      postOrder(node[n].left);
      postOrder(node[n].right);
      result.push(n);
    }
    
    function order(n) {
      if(!node[n]) return;

      order(node[n].left);
      result.push(n);
      order(node[n].right);
    }

    preOrder('A');
    console.log(result.join(""));
    result = [];
    order('A');
    console.log(result.join(""));
    result = [];
    postOrder('A');
    console.log(result.join(""));
});
