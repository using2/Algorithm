function solution(rank, attendance) {
    const attend = rank
        .map((score, i) => ({ score, i }))
        .filter((c, index) => attendance[index])
        .sort((a, b) => a.score - b.score);

    const [a, b, c] = [attend[0].i, attend[1].i, attend[2].i];

    return 10000 * a + 100 * b + c;
}
