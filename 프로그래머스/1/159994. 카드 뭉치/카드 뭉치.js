function solution(cards1, cards2, goal) {
    var answer = '';
    
    let A = 0, B = 0, G = 0;
    
    while(G < goal.length) {
        if(goal[G] === cards1[A]) {
            console.log(cards1[A]);
            A++; G++; continue;
        } else if(goal[G] === cards2[B]) {
            console.log(cards2[B]);
            B++; G++; continue;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}