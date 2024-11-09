function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const filtered = arr.slice(s, e + 1).filter(num => num > k);
        return filtered.length > 0 ? Math.min(...filtered) : -1;
    });
}