function solution(my_string, num1, num2) {
    const charArray = my_string.split('');
    
    const temp = charArray[num1];
    charArray[num1] = charArray[num2];
    charArray[num2] = temp;

    return charArray.join('');
}