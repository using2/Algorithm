function solution(arr, query) {
    query.forEach((q, idx) => {
        if (idx % 2 === 0) {
            arr = arr.slice(0, q + 1);
        } else {
            arr = arr.slice(q);
        }
    });

    return arr;
}