function solution(weights) {
  weights.sort((a, b) => a - b);

  const count = new Map();
  let answer = 0;

  for (const w of weights) {
    answer += count.get(w) ? count.get(w) : 0;

    if (w % 2 === 0) {
      answer += count.get(w / 2) ? count.get(w / 2) : 0;
    }

    if (w % 3 === 0) {
      answer += count.get((w * 2) / 3) ? count.get((w * 2) / 3) : 0;
    }

    if (w % 4 === 0) {
      answer += count.get((w * 3) / 4) ? count.get((w * 3) / 4) : 0;
    }

    count.set(w, (count.get(w) ? count.get(w) : 0) + 1);
  }

  return answer;
}