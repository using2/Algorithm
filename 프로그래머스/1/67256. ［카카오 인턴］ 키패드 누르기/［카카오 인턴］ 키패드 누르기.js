function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    const rightKey = [1, 4, 7];
    const leftKey = [3, 6, 9];
    
    let leftPos = keypad['*'];
    let rightPos = keypad['#'];
    
    numbers.forEach((num) => {
        if (rightKey.includes(num)) {
            answer += 'L';
            leftPos = keypad[num];
        } else if (leftKey.includes(num)) {
            answer += 'R';
            rightPos = keypad[num];
        } else {
            const leftDist = Math.abs(leftPos[0] - keypad[num][0]) + Math.abs(leftPos[1] - keypad[num][1]);
            const rightDist = Math.abs(rightPos[0] - keypad[num][0]) + Math.abs(rightPos[1] - keypad[num][1]);
            
            if (leftDist < rightDist) {
                answer += 'L';
                leftPos = keypad[num];
            } else if (rightDist < leftDist) {
                answer += 'R';
                rightPos = keypad[num];
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    rightPos = keypad[num];
                } else {
                    answer += 'L';
                    leftPos = keypad[num];
                }
            }
        }
    });
    
    return answer;
}