function solution(bandage, health, attacks) {
    var answer = health;
    let prevAttackSec = 0;
    for(let i = 0; i < attacks.length; i++) {
        const a = attacks[i];
        const sec = a[0];
        const damage = a[1];
        const duration = sec - prevAttackSec - 1;
        const additionCnt = Math.floor((sec - prevAttackSec - 1) / bandage[0]);
        const addHP = (duration * bandage[1]) + (additionCnt * bandage[2]) + answer;
        answer = addHP >= health? health : addHP;
        answer -= damage;
        prevAttackSec = sec;
        if(answer <= 0) return -1;
    };
    
    return answer <= 0? -1 : answer;
}