function solution(array) {
    const frequencyMap = new Map();

    array.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    const maxFrequency = Math.max(...frequencyMap.values());

    const mostFrequentNumbers = [...frequencyMap.entries()]
        .filter(([_, freq]) => freq === maxFrequency)
        .map(([num, _]) => num);

    return mostFrequentNumbers.length > 1 ? -1 : mostFrequentNumbers[0];
}
