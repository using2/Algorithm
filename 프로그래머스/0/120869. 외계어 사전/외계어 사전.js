function solution(spell, dic) {
    const target = spell.sort().join('');

    for (let word of dic) {
        if ([...word].sort().join('') === target) {
            return 1;
        }
    }
    return 2;
}
