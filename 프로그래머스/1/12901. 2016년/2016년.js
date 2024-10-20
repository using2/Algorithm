function solution(a, b) {
    var answer = '';
    
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = b;
    let yoill = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    for(let i = 1; i < a; i++) {
        days += month[i];
    }
    
    days %= 7;
    answer = yoill[days];
    
    return answer;
}