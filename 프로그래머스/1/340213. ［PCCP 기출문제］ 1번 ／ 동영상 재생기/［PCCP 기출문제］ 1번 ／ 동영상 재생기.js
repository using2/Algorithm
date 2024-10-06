function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let [endM, endS] = video_len.split(":").map(Number); 
    let [curM, curS] = pos.split(":").map(Number); 
    let [openStartM, openStartS] = op_start.split(":").map(Number);
    let [openEndM, openEndS] = op_end.split(":").map(Number);
    
    commands.forEach(c => {
        if(c === "next") {
            if (
                (curM > openStartM || (curM === openStartM && curS >= openStartS)) && 
                (curM < openEndM || (curM === openEndM && curS <= openEndS))
            ) {
                curM = openEndM;
                curS = openEndS;
            }
            
            curS += 10;
            if (curS >= 60) {
                curM += 1;
                curS = curS % 60;
            }
            
            if (
                (curM > openStartM || (curM === openStartM && curS >= openStartS)) && 
                (curM < openEndM || (curM === openEndM && curS <= openEndS))
            ) {
                curM = openEndM;
                curS = openEndS;
            }
        } else if(c === "prev") {
            curS -= 10;
            if (curS < 0) {
                if (curM > 0) { 
                    curM -= 1;
                    curS = 60 + curS; 
                } else {
                    curS = 0; 
                }
            }
            
            if (
                (curM > openStartM || (curM === openStartM && curS >= openStartS)) && 
                (curM < openEndM || (curM === openEndM && curS <= openEndS))
            ) {
                curM = openEndM;
                curS = openEndS;
            }
        }

        if (curM > endM || (curM === endM && curS > endS)) {
            curM = endM;
            curS = endS;
        }

        cur = `${curM < 10 ? '0' + curM : curM}:${curS < 10 ? '0' + curS : curS}`; 
    });

    answer = cur; 
    return answer;
}
