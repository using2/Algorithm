function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        const digit = storey % 10;
        const next = Math.floor(storey / 10) % 10;
        
        if(digit > 5) {
            storey += 10;
            answer += 10 - digit;
        } else if (digit === 5 && next >= 5) {
            answer += digit;
            storey += 10;
        } else {
            answer += digit;
        }
        
        storey = Math.floor(storey / 10);
    }

    return answer;
}