function solution(number) {
    const sumOfDigits = number.split('').reduce((acc, cur) => acc + Number(cur), 0);
    return sumOfDigits % 9;
}
