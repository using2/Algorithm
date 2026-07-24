function solution(gems) {
    var answer = [];

    let start = 0;

    let mem = {};
    let size = 0;

    let set = new Set(gems);

    for (let i = 0; i < gems.length; i++) {
        let now = gems[i];

        if (mem[now] === undefined) {
            mem[now] = 0;
            size++;
        }
        mem[now]++;

        if (size === set.size) {
            while (mem[gems[start]] > 1) {
                mem[gems[start]]--;
                start++;
            }

            if (answer.length === 0 || answer[1] - answer[0] > i - start) {
                answer = [start + 1, i + 1];
            }
        }
    }

    return answer;
}