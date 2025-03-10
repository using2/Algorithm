function solution(s) {
    var answer = 0;
    
    let x = s[0];
    let x_cnt = 1;
    let other_cnt = 0;
    let cur_word = "";
    
    for(let i = 1; i < s.length; i++) {
         if(x !== s[i]) {
             cur_word += s[i];
             other_cnt++;
         } else {
             cur_word += s[i];
             x_cnt++;
         }
        
        if(x_cnt === other_cnt) {
            answer++;
            x_cnt = 1;
            other_cnt = 0;
            x = s[i + 1];
            cur_word = s[i + 1];
            ++i;
        }
    }
    
    if(typeof cur_word === "string") answer++;
    
    return answer;
}