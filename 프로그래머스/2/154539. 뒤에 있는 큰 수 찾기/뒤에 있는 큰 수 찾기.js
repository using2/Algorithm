function solution(numbers) {
    const answer = [];
    const stack = [];

    numbers.reverse().forEach(e => {
        while (stack.length !== 0 && stack[stack.length - 1] <= e) {
            stack.pop();
        }

        if (stack.length !== 0) {
            answer.push(stack[stack.length - 1]);
        } else {
            answer.push(-1);
        }

        stack.push(e);
    });

    return answer.reverse();
}
