function solution(s) {
    var answer = [];
    let transCnt = 0;
    let zeroCnt = 0;
    
    while(s !== "1") {
        zeroCnt += s.split("0").length - 1;
        s = s.replaceAll("0", "");
        
        let transLength = s.length;   
        s = transLength.toString(2);
        transCnt++; 
    }
    
    answer = [transCnt, zeroCnt];
    
    return answer;
}
