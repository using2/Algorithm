function solution(s) {
    var answer = [];
    const str = s.slice(0, -2).slice(2);
    const arr = str.split("},{").map(a => a.split(",").map(b=> parseInt(b)));
    arr.sort((a, b) => {
        return a.length - b.length;
    })
    answer.push(arr[0][0]);
    for(let i = 1; i < arr.length; i++) {
        arr[i].forEach((e) => {
            if(!answer.includes(e)) answer.push(e);
        })
    }
    return answer;
}