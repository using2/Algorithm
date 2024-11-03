function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;

    if (n === 1) {
        return num_list.slice(0, b + 1);
    } else if (n === 2) {
        return num_list.slice(a);
    } else if (n === 3) {
        return num_list.slice(a, b + 1);
    } else if (n === 4) {
        return num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
    }
}