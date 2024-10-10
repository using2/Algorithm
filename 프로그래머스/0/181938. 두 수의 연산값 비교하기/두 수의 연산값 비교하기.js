function solution(a, b) {
    var answer = 0;
    let num1 = parseInt(a.toString() + b.toString());
    let num2 = 2 * a * b;
    answer = num1 >= num2? num1 : num2;
    return answer;
}