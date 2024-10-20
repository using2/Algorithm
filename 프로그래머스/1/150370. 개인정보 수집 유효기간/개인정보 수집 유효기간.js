function solution(today, terms, privacies) {
    var answer = [];
    const term = {};
    terms.forEach((e) => {
        const split = e.split(" ");
        term[split[0]] = parseInt(split[1]);
    });
    
    privacies.forEach((e, i) => {
        let [time, t] = e.split(" ");
        time = time.split(".").map(e => parseInt(e));
        if((time[1] + term[t]) % 12 === 0) {
            const year = Math.floor((time[1] + term[t]) / 12);
            time[0] += year - 1;
            time[1] = 12;
        } else {
            const year = Math.floor((time[1] + term[t]) / 12);
            time[0] += year;
            time[1] = (time[1] + term[t]) % 12;   
        }

        time = time.map((e) => {
            if(e < 10) return "0" + e;
            else return e;
        }).join(".");
        if(today >= time) answer.push(i + 1);
    });
    
    return answer;
}