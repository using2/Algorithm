const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

let result = [];

for (let i = 0; i < T; i++) {

    let p = input[i * 3 + 1];

    let n = parseInt(input[i * 3 + 2]);

    let arr = input[i * 3 + 3].slice(1, -1).split(",");

    if (n === 0) arr = [];

    let isReversed = false;

    let isError = false;

    let front = 0, back = arr.length;

    for (let cmd of p) {

        if (cmd === "R") {

            isReversed = !isReversed;

        } else if (cmd === "D") {

            if (front >= back) {

                isError = true;

                break;

            }

            isReversed ? back-- : front++;

        }

    }

    if (isError) {

        result.push("error");

    } else {

        let res = arr.slice(front, back);

        if (isReversed) res.reverse();

        result.push(`[${res.join(",")}]`);

    }

}

console.log(result.join("\n"));