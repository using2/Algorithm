function solution(my_string, queries) {
    let strArr = my_string.split("");

    for (let [s, e] of queries) {
        const reversed = strArr.slice(s, e + 1).reverse();
        strArr.splice(s, e - s + 1, ...reversed);
    }

    return strArr.join("");
}