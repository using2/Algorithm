function solution(stones, k) {
    var answer = Infinity;
    
    // 길이 k인 슬라이딩 윈도우의 최댓값을 덱으로 관리
    // 모든 윈도우의 최댓값 계산
    // 그 최댓값들 중 가장 작은 값을 답으로 반환
    
    const deque = [];
    let head = 0;

    for (let i = 0; i < stones.length; i++) {

        // 현재 윈도우를 벗어난 인덱스 제거
        while (head < deque.length && deque[head] <= i - k) {
            head++;
        }

        // 현재 값보다 작은 값들은 앞으로 최대가 될 일이 없으므로 제거
        while (
            deque.length > head &&
            stones[deque[deque.length - 1]] <= stones[i]
        ) {
            deque.pop();
        }

        // 현재 인덱스 삽입
        deque.push(i);

        // 길이 k인 윈도우가 완성되면
        if (i >= k - 1) {
            // 최대값들 중 최솟값 갱신
            answer = Math.min(answer, stones[deque[head]]);
        }
    }
    
    return answer;
}