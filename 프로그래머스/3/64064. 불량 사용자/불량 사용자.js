function solution(user_id, banned_id) {
    let candidates = [];
    
    // 각 banned_id에 해당하는 인물들 list 찾기
    // 정규 표현식 쓰기
    for (const ban of banned_id) {
        let expr = "^";

        for (const c of ban) {
            expr += c === "*" ? "[a-z0-9]" : c;
        }

        expr += "$";

        const re = new RegExp(expr);
        const list = [];

        for (let i = 0; i < user_id.length; i++) {
            if (re.test(user_id[i])) {
                list.push(i);
            }
        }

        candidates.push(list);
    }
    
    // dfs + 비트 마스킹 
    const result = new Set();

    function dfs(depth, mask) {
        if (depth === banned_id.length) {
            result.add(mask);
            return;
        }

        for (const idx of candidates[depth]) {
            if (mask & (1 << idx)) continue;

            dfs(depth + 1, mask | (1 << idx));
        }
    }

    dfs(0, 0);

    return result.size;
}