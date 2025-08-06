function solution(m, musicinfos) {
    let answer = '(None)';
    let maxDuration = 0;

    function convertMelody(melody) {
        return melody
            .replace(/C#/g, 'c')
            .replace(/D#/g, 'd')
            .replace(/F#/g, 'f')
            .replace(/G#/g, 'g')
            .replace(/A#/g, 'a')
            .replace(/B#/g, 'b');
    }

    const target = convertMelody(m);

    musicinfos.forEach(info => {
        const [start, end, title, sheet] = info.split(',');

        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);

        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em;
        const duration = endMin - startMin;

        const fullMelody = convertMelody(sheet);
        
        const played = fullMelody.repeat(Math.floor(duration / fullMelody.length)) + 
                       fullMelody.slice(0, duration % fullMelody.length);

        if (played.includes(target)) {
            if (duration > maxDuration) {
                maxDuration = duration;
                answer = title;
            }
        }
    });

    return answer;
}
