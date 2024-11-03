function solution(array, n) {
    return array.reduce((closest, current) => {
        if (closest === null || Math.abs(current - n) < Math.abs(closest - n) || 
            (Math.abs(current - n) === Math.abs(closest - n) && current < closest)) {
            return current;
        }
        return closest;
    }, null);
}