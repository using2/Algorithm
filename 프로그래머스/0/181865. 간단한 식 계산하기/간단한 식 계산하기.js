function solution(binomial) {
    const [a, op, b] = binomial.split(' ');

    const numA = parseInt(a);
    const numB = parseInt(b);

    switch (op) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        default:
            return 0;  
    }
}