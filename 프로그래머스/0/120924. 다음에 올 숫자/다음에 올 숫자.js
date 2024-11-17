function solution(common) {
    const diff = common[1] - common[0];
    const ratio = common[1] / common[0];

    if (common[2] - common[1] === diff) {
        return common[common.length - 1] + diff;
    } else {
        return common[common.length - 1] * ratio; 
    }
}
