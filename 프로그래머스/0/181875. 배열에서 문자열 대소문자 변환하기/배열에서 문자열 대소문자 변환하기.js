function solution(strArr) {
    var answer = strArr.map((e, i) => {
        if(i % 2 === 0) return e.toLowerCase();
        else return e.toUpperCase();
    })
    return answer;
}