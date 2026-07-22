function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);

    let answer = 0;
    let minEnd = routes[0][1];

    for (let i = 1; i < routes.length; i++) {
        const [start, end] = routes[i];

        if (start <= minEnd) {
            minEnd = Math.min(minEnd, end);
        } else {
            answer++;
            minEnd = end;
        }
    }

    answer++;

    return answer;
}