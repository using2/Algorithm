function solution(num, total) {
    const start = Math.floor(total / num) - Math.floor((num - 1) / 2);
    return Array.from({ length: num }, (_, i) => start + i);
}
