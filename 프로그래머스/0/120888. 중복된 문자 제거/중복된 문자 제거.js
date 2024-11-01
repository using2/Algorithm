function solution(my_string) {
    let uniqueChars = new Set();
    let result = "";

    for (let char of my_string) {
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            result += char;
        }
    }

    return result;
}