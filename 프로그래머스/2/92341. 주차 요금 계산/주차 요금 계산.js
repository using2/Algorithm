function solution(fees, records) {
    const cars = {};  
    const totalTimes = {};  

    records.forEach(record => {
        const [time, num, status] = record.split(' ');
        const [hour, min] = time.split(':').map(Number);
        const currentMin = hour * 60 + min;

        if (status === 'IN') {
            cars[num] = currentMin; 
        } else {
            const inTime = cars[num];
            const parkedTime = currentMin - inTime;
            totalTimes[num] = (totalTimes[num] || 0) + parkedTime;
            delete cars[num];
        }
    });

    const endOfDay = 23 * 60 + 59;
    for (const num in cars) {
        const inTime = cars[num];
        const parkedTime = endOfDay - inTime;
        totalTimes[num] = (totalTimes[num] || 0) + parkedTime;
    }

    function calculateFee(time) {
        if (time <= fees[0]) return fees[1];
        else {
            const extra = time - fees[0];
            return fees[1] + Math.ceil(extra / fees[2]) * fees[3];
        }
    }

    const answer = Object.keys(totalTimes)
        .map(num => [Number(num), calculateFee(totalTimes[num])])
        .sort((a, b) => a[0] - b[0])
        .map(e => e[1]);

    return answer;
}
