function solution(brown, yellow) {
    var answer = [];
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            const num1 = i;
            if (i !== yellow / i) {
                const num2 = yellow / i;
                if((num1 * 2) + (num2 * 2) + 4 === brown) {
                    answer = [num2 + 2, num1 + 2];
                    break;
                }
            } else {
                if((num1 * 4) + 4 === brown) {
                    answer = [num1 + 2, num1 + 2];
                    break;
                }
            }
        }
    }
    
    return answer;
}