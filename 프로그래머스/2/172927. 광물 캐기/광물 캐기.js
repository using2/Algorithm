function solution(picks, minerals) {
    let answer = 0;

    const group = [];

    const weight = {
        diamond: 25,
        iron: 5,
        stone: 1,
    };

    const rocks = {
        diamond: {
            diamond: 1,
            iron: 1,
            stone: 1,
        },
        iron: {
            diamond: 5,
            iron: 1,
            stone: 1,
        },
        stone: {
            diamond: 25,
            iron: 5,
            stone: 1,
        },
    };

    const pickName = ["diamond", "iron", "stone"];

    const maxMinerals = Math.min(
        minerals.length,
        picks.reduce((acc, cur) => acc + cur, 0) * 5
    );

    for (let i = 0; i < maxMinerals; i += 5) {
        let cost = 0;

        for (let j = i; j < i + 5 && j < maxMinerals; j++) {
            cost += weight[minerals[j]];
        }

        group.push([i, cost]);
    }
    
    group.sort((a, b) => b[1] - a[1]);

    let gIdx = 0;

    for (let type = 0; type < 3; type++) {
        while (picks[type] > 0 && gIdx < group.length) {

            picks[type]--;

            const start = group[gIdx][0];
            const pick = pickName[type];

            for (let i = start; i < start + 5 && i < maxMinerals; i++) {
                answer += rocks[pick][minerals[i]];
            }

            gIdx++;
        }
    }

    return answer;
}