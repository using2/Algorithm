function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat);
    return myString.slice(0, lastIndex + pat.length);
}
