function solution(babbling) {
    var answer = 0;
    const invalidPattern = /(aya|ye|woo|ma)\1+/;
    const validPattern = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(b => {
        if (!invalidPattern.test(b) && validPattern.test(b)) {
            answer++;
        }
    });

    return answer;
}
