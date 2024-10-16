function solution(myString) {
    var answer = [];
    const arr = myString.split("x");
    arr.forEach(e => {
        answer.push(e.length);
    })
    return answer;
}