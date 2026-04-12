function solution(genres, plays) {
    var answer = [];
    let music = {};
    let genre = {};
    
    for(let i = 0; i < genres.length; i++) {
        let g = genres[i];
        
        if(genre[g] === undefined) genre[g] = 0;
        genre[g] += plays[i];
        
        if(music[g] === undefined) music[g] = [];
        music[g].push(i);
    }
    
    let sorted = Object.entries(genre).sort(([k1, v1], [k2, v2]) => {
        return v2 - v1;
    })
    
    for(let s of sorted) {
        let curMusics = music[s[0]];
        
        let sorted = curMusics.sort((a, b) => plays[b] - plays[a]).slice(0, 2);
        answer.push(...sorted);
    }
    
    return answer;
}