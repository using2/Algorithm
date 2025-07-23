function solution(n) {
  const MOD = 1000000007;
  if (n < 3) return n;

  let a = 1, b = 2;

  for (let i = 3; i <= n; ++i) {
    const temp = (a + b) % MOD;
    a = b;
    b = temp;
  }

  return b;
}
