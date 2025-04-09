function solution(n, w, num) {
    const targetFloor = Math.floor((num - 1) / w);
    const isLeftToRight = targetFloor % 2 === 0;
    const posInRow = (num - 1) % w;
    const pos = isLeftToRight ? posInRow : w - 1 - posInRow;

    let count = 1;

    for (let floor = targetFloor + 1; floor * w < n + w; floor++) {
        let isEven = floor % 2 === 0;
        let indexInList = isEven ? floor * w + pos : (floor + 1) * w - 1 - pos;

        if (indexInList < n) {
            count++;
        } else {
            break;
        }
    }

    return count;
}
