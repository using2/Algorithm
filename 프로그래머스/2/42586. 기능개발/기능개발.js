function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });

    const answer = [];
    let count = 1;
    let maxDays = days[0]; 

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDays) {
            count++; 
        } else {
            answer.push(count); 
            count = 1; 
            maxDays = days[i];
        }
    }

    answer.push(count);

    return answer;
}