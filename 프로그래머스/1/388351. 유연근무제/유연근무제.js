function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    for(let i = 0; i < schedules.length; i++) {
        let day = startday;
        let check = true;
        let safeTime = (schedules[i] + 10) % 100 >= 60? schedules[i] + 50 : schedules[i] + 10;
        for(let j = 0; j < 7; j++) {
            let currentDay = (day + j - 1) % 7 + 1;
            if(currentDay !== 6 && currentDay !== 7) {
                let nowTime = timelogs[i][j];
            
                if(nowTime > safeTime) check = false;   
            }            
        }
        if(check) answer++;
    }
    
    return answer;
}