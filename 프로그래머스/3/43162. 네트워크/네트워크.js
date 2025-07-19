function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && computers[node][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
