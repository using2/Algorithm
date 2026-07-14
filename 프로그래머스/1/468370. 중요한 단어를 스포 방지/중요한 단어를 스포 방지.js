function solution(message, spoiler_ranges) {
    const words = [];

    let start = 0;
    for (let i = 0; i <= message.length; i++) {
        if (i === message.length || message[i] === " ") {
            words.push({
                word: message.slice(start, i),
                start,
                end: i - 1,
                spoiler: -1,
            });
            start = i + 1;
        }
    }

    let p = 0;
    for (const w of words) {
        while (
            p < spoiler_ranges.length &&
            spoiler_ranges[p][1] < w.start
        ) {
            p++;
        }

        if (
            p < spoiler_ranges.length &&
            !(w.end < spoiler_ranges[p][0] || w.start > spoiler_ranges[p][1])
        ) {
            w.spoiler = p;
        }
    }

    const normal = new Set();
    for (const w of words) {
        if (w.spoiler === -1) {
            normal.add(w.word);
        }
    }
    
    const opened = new Set();
    let answer = 0;

    for (let i = 0; i < spoiler_ranges.length; i++) {
        for (const w of words) {
            if (w.spoiler !== i) continue;

            if (!normal.has(w.word) && !opened.has(w.word)) {
                answer++;
            }

            opened.add(w.word);
        }
    }

    return answer;
}