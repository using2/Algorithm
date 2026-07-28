function solution(n, costs) {
    let answer = 0;

    // 각 정점의 부모를 자기 자신으로 초기화
    const parent = Array.from({ length: n }, (_, i) => i);

    // Union by Rank를 위한 높이 정보
    const rank = new Array(n).fill(0);

    // 비용이 작은 간선부터 선택하기 위해 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);

    // 현재 정점이 속한 집합의 root 찾기
    function find(x) {
        // 현재 x가 root라면 그대로 반환
        if (parent[x] === x) return x;

        // root가 아니라면 root를 찾으면서
        // 지나온 노드들을 모두 root에 직접 연결(경로 압축)
        return parent[x] = find(parent[x]);
    }

    // 두 집합을 하나로 합치기
    function unite(a, b) {
        // 각각의 루트 찾기
        a = find(a);
        b = find(b);

        // 이미 같은 집합이면 합칠 필요 없음
        if (a === b) return;

        // 높이가 더 낮은 트리를 높은 트리 밑으로 붙임
        if (rank[a] < rank[b]) {
            [a, b] = [b, a];
        }

        // b의 루트를 a 밑으로 연결
        parent[b] = a;

        // 두 트리의 높이가 같았다면
        // 합쳐진 트리의 높이가 1 증가
        if (rank[a] === rank[b]) {
            rank[a]++;
        }
    }

    // Kruskal: union-find 알고리즘과 sort를 활용하여 MST를 구하는 알고리즘.
    
    // 비용이 가장 작은 간선부터 선택
    // 사이클이 생기지 않는 경우에만 MST에 포함
    for (const [u, v, cost] of costs) {

        // 서로 다른 집합이라면
        if (find(u) !== find(v)) {

            // 두 집합을 하나로 합치고
            unite(u, v);

            // 선택한 간선의 비용 추가
            answer += cost;
        }
    }

    return answer;
}