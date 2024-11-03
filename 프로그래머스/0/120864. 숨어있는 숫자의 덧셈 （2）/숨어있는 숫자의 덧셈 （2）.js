function solution(my_string) {
    return my_string.match(/\d+/g)?.map(Number).reduce((a, b) => a + b, 0) || 0;
}