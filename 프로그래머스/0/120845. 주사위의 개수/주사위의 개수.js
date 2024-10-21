function solution(box, n) {
    const widthCount = Math.floor(box[0] / n); 
    const heightCount = Math.floor(box[1] / n); 
    const depthCount = Math.floor(box[2] / n);

    return widthCount * heightCount * depthCount;
}