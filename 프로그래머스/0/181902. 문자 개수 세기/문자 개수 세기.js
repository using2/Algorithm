function solution(my_string) {
    const count = Array(52).fill(0);

    for (let char of my_string) {
        if (char >= 'A' && char <= 'Z') {
            count[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        } else if (char >= 'a' && char <= 'z') {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }
    }

    return count;
}