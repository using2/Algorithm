function solution(emergency) {
    const answer = emergency
        .map((e, i) => ({ e: e, index: i }))
        .sort((a, b) => b.e - a.e)
        .map((e, i) => {
            const rank = i + 1;
            return { ...e, rank };
        })
        .sort((a, b) => a.index - b.index)  
        .map((e) => e.rank);

    return answer;
}