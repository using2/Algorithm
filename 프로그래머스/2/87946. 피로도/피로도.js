function solution(k, dungeons) {
    var answer = 0;
    
    function tamhum(bangmun, dungeons, HP, cnt) {
        answer = Math.max(answer, cnt);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!bangmun[i] && HP >= dungeons[i][0]) {
                bangmun[i] = true;
                tamhum(bangmun, dungeons, HP - dungeons[i][1], cnt + 1);
                bangmun[i] = false;
            }
        }
    }
    
    const bangmun = Array(dungeons.length).fill(false);
    
    tamhum(bangmun, dungeons, k, 0);
    
    return answer;
}