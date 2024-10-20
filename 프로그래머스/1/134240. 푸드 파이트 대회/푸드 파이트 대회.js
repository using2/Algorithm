function solution(food) {
    var answer = '';
    
    for (let i = 1; i < food.length; i++) {
        food[i] = Math.floor(food[i] / 2);
        answer += String(i).repeat(food[i]);
    }

    answer += '0';

    for (let i = food.length - 1; i > 0; i--) {
        answer += String(i).repeat(food[i]);
    }

    return answer;
}
