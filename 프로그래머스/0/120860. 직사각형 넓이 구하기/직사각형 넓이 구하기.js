function solution(dots) {
    const x = dots.map(dot => dot[0]);
    const y = dots.map(dot => dot[1]);

    const xMax = Math.max(...x);
    const xMin = Math.min(...x);
    const yMax = Math.max(...y);
    const yMin = Math.min(...y);

    const width = xMax - xMin;
    const height = yMax - yMin;

    return width * height;
}
