function solution(n, stations, w) {
    let answer = 0;

    let prevEnd = 0;

    for (const station of stations) {
        const start = station - w;
        const end = station + w;

        const empty = start - prevEnd - 1;

        if (empty > 0) {
            answer += Math.ceil(empty / (2 * w + 1));
        }

        prevEnd = end;
    }

    const empty = n - prevEnd;

    if (empty > 0) {
        answer += Math.ceil(empty / (2 * w + 1));
    }

    return answer;
}