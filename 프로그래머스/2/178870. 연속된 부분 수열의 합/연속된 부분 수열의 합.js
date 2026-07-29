function solution(sequence, k) {
    var answer = [];
    
    // 슬라이딩 윈도우
    // 앞에서부터 합산한 값과 k 값을 비교
    // 현재 값을 더한 값이 k 값보다 크다면 맨 앞의 값 제거'
    // 현재 값이 k와 같다면 answer 목록에 추가
    
    let answers = [];
    let cur = 0;
    let head = 0;
    
    for(let i = 0; i < sequence.length; i++) {
        cur += sequence[i];
        
        while(cur > k) {
            cur -= sequence[head];
            head++;
        }
        
        if(cur === k) answers.push([head, i]);
    }
    
    answers.sort((a, b) => {
        return (a[1] - a[0]) - (b[1] - b[0]);
    })
    
    
    return answers[0];
}