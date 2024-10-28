function solution(keymap, targets) {
    const keyPressMap = {};

    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const char = keymap[i][j];
            if (!keyPressMap[char]) {
                keyPressMap[char] = j + 1;
            } else {
                keyPressMap[char] = Math.min(keyPressMap[char], j + 1);
            }
        }
    }

    const result = targets.map(target => {
        let pressCount = 0;
        for (let i = 0; i < target.length; i++) {
            const char = target[i];
            if (!keyPressMap[char]) {
                return -1;
            }
            pressCount += keyPressMap[char];
        }
        return pressCount;
    });

    return result;
}