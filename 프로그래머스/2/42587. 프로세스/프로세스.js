function solution(priorities, location) {
    let answer = 0;
    const initQueue = priorities.map((priority, index) => ({ p: priority, idX: index }));
    const sortP = [...priorities].sort((a, b) => b - a);

    while (initQueue.length) {
        const process = initQueue.shift();

        if (process.p < sortP[0]) {
            initQueue.push(process);
            continue;
        }

        answer++;
        sortP.shift();

        if (process.idX === location) break;
    }

    return answer;
}
