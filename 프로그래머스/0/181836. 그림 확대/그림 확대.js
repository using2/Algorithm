function solution(picture, k) {
    const result = [];

    for (let row of picture) {
        const expandedRow = [...row].map(char => char.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}
