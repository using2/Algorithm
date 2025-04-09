function solution(wallpaper) {
    var answer = [];
    let leftMost = Infinity;
    let topMost = Infinity;
    let rightMost = 0;
    let downMost = 0;
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === "#") {
                if(i < topMost) topMost = i;
                if(j < leftMost) leftMost = j;
                if(i > downMost) downMost = i;
                if(j > rightMost) rightMost = j;
            }
        }
    }
    
    answer = [topMost, leftMost, downMost + 1, rightMost + 1];
    return answer;
}