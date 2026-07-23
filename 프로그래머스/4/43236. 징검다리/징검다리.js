function solution(distance, rocks, n) {
    rocks.push(0);
    rocks.push(distance);
    rocks.sort((a, b) => a - b);

    let left = 0;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
    
    function check(minDistance) {
        let removed = 0;
        let prev = rocks[0];

        for (let i = 1; i < rocks.length; i++) {
            let dist = rocks[i] - prev;
            
            if(dist < minDistance) removed++;
            else prev = rocks[i];
        }

        return removed <= n;
    }
}