function solution(cost, hint) {
    var answer = Infinity;

    function dfs() {
        let nowHint = new Array(cost.length).fill(0);

        let stack = [[0, 0, nowHint]];

        while (stack.length) {
            let [stage, nowCost, nowHint] = stack.pop();

            if (stage === cost.length) {
                answer = Math.min(answer, nowCost);
                continue;
            }

            let hintCnt = Math.min(nowHint[stage], cost.length - 1);
            let nextCost = nowCost + cost[stage][hintCnt];

            stack.push([
                stage + 1,
                nextCost,
                nowHint
            ]);

            if (stage < cost.length - 1) {
                let nextHint = [...nowHint];

                hint[stage].forEach((idx, i) => {
                    if (i !== 0) {
                        nextHint[idx - 1]++;
                    }
                });

                stack.push([
                    stage + 1,
                    nextCost + hint[stage][0],
                    nextHint
                ]);
            }
        }
    }

    dfs();

    return answer;
}