function solution(s) {
    var answer = s.length;
    let length = Math.floor(s.length / 2);
    
    for (let size = 1; size <= length; size++) {
        let compress = "";
        let cnt = 1;

        let prev = s.slice(0, size);

        for (let i = size; i < s.length; i += size) {
            let cur = s.slice(i, i + size);

            if (prev === cur) {
                cnt++;
            } else {
                if(cnt === 1) compress = compress + prev;
                else compress = compress + cnt + prev;

                prev = cur;
                cnt = 1;
            }
        }

        if(cnt === 1) compress = compress + prev;
        else compress = compress + cnt + prev;
        
        answer = Math.min(compress.length, answer);
    }
    
    return answer;
}