/**
 * DP 판단 기준
 *
 * 현재 선택이 미래 선택에 영향을 주고,
 * 이전 상태의 최적 결과를 재활용할 수 있다면 DP를 의심한다.
 *
 * 체크 포인트:
 * 1. 선택에 따라 이후 가능한 선택이 달라지는가?
 * 2. "i번째까지 고려했을 때 최댓값/최솟값" 같은 상태 정의가 가능한가?
 * 3. 이전 결과를 저장해 중복 계산을 줄일 수 있는가?
 */
function solution(sticker) {
    if(sticker.length === 1) return sticker[0];
    
    let dp1 = Array(sticker.length).fill(0);
    let dp2 = Array(sticker.length).fill(0);

    // 첫번째 칸을 선택하는 경우
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];

    // 마지막 칸을 선택하는 경우
    dp2[1] = sticker[1];

    for (let i = 2; i < sticker.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }

    for (let i = 2; i < sticker.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }

    return Math.max(dp1[sticker.length - 2], dp2[sticker.length - 1]);
}