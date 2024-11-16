function solution(score) {
    const averages = score.map(([eng, math]) => (eng + math) / 2);
    const sorted = [...averages].sort((a, b) => b - a);
    const ranks = averages.map(avg => sorted.indexOf(avg) + 1);

    return ranks;
}