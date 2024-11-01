function solution(myString, pat) {
    let count = 0;
    let pos = 0;

    while ((pos = myString.indexOf(pat, pos)) !== -1) {
        count++;
        pos++; 
    }

    return count;
}