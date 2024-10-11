function solution(myString, pat) {
    var answer = 0;
    let reverse = myString.split("").map(e => {
        if(e === "A") return "B";
        else return "A";
    }).join("");
    answer = reverse.includes(pat)? 1 : 0;
    return answer;
}