const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const s = input[0];
  console.log(manacher(s));

  function manacher(str) {
    // 1. 전처리
    // 짝수 길이 팰린드롬도 처리하기 위해 모든 문자 사이(+ 양 끝)에 '#' 삽입
    // 예: "abba" → "#a#b#b#a#"
    // 이렇게 하면 모든 팰린드롬을 "홀수 길이"로 통일해서 처리할 수 있음
    const T = "#" + str.split("").join("#") + "#";
    const n = T.length;

    // P[i] = T[i]를 중심으로 하는 팰린드롬의 반지름
    // (중심 제외, 한쪽 방향으로 뻗어나간 길이)
    // 예: T = "#a#b#b#a#", P[4] = 4 → "#a#b[b]#a#" 에서 반지름 4
    const P = Array(n).fill(0);

    // center : 현재까지 발견한 팰린드롬 중 "가장 오른쪽으로 뻗은" 것의 중심 인덱스
    // right  : 그 팰린드롬의 오른쪽 끝 인덱스 (= center + P[center])
    let center = 0;
    let right = 0;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
      // 2. 핵심 최적화: 대칭 이용
      // i가 현재 right 팰린드롬 안에 있다면,
      // center 기준으로 i의 대칭점(mirror)의 P 값을 재활용할 수 있음
      //
      //   b----center----i  (right = center + P[center])
      //   └── mirror ──┘
      //
      // mirror = 2*center - i  (center에서 i만큼 왼쪽)
      const mirror = 2 * center - i;

      if (i < right) {
        // mirror의 팰린드롬이 현재 right 팰린드롬을 벗어나지 않는 범위까지만
        // 그대로 복사 가능 -> 벗어나는 경우엔 right-i까지만 보장
        P[i] = Math.min(right - i, P[mirror]);
      }
      // i >= right 이면 P[i]는 0(초기값)으로 두고 아래에서 직접 확장

      // 3. 직접 확장
      // P[i] 값을 시작점으로, 실제로 한 칸씩 더 뻗어나갈 수 있는지 확인
      // a: 오른쪽으로 다음에 비교할 인덱스
      // b: 왼쪽으로 다음에 비교할 인덱스
      let a = i + P[i] + 1;
      let b = i - P[i] - 1;

      while (a < n && b >= 0 && T[a] === T[b]) {
        P[i]++;
        a++;
        b--;
      }

      // 4. center/right 갱신
      // i를 중심으로 한 팰린드롬이 기존 right보다 더 오른쪽으로 뻗으면
      // center와 right를 갱신 (다음 i들이 이 팰린드롬을 재활용할 수 있도록)
      if (i + P[i] > right) {
        center = i;
        right = i + P[i];
      }

      // P[i]는 변환된 문자열 T 기준 반지름
      // '#' 삽입으로 인해 P[i] 값이 원본 문자열의 팰린드롬 길이와 동일
      // 예: 원본 "abba"의 팰린드롬 길이 4 = T에서 P[i] = 4
      maxLen = Math.max(maxLen, P[i]);
    }

    return maxLen;
  }
});
