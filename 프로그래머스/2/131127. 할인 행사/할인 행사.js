function solution(want, number, discount) {
    const wantMap = {};
    const discountMap = {};
    const requiredCount = want.length;
    let answer = 0;

    for (let i = 0; i < requiredCount; i++) {
        wantMap[want[i]] = number[i];
    }

    const discountLength = discount.length;

    for (let i = 0; i < discountLength; i++) {
        if (i >= 10) {
            discountMap[discount[i - 10]]--;
            if (discountMap[discount[i - 10]] === 0) {
                delete discountMap[discount[i - 10]];
            }
        }

        discountMap[discount[i]] = (discountMap[discount[i]] || 0) + 1;

        if (i >= 9) {
            let isValid = true;
            for (const key in wantMap) {
                if (discountMap[key] !== wantMap[key]) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                answer++;
            }
        }
    }

    return answer;
}