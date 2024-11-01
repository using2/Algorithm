function solution(myString) {
    const result = myString.split("x").filter(str => str !== "");

    result.sort();

    return result;
}