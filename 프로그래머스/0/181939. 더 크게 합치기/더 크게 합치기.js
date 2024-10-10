function solution(a, b) {
    var answer = 0;
    let num1 = a.toString() + b.toString();
    let num2 = b.toString() + a.toString();
    
    answer = num1 >= num2 ? num1 : num2;
    return parseInt(answer);
}