function solution(num_list) {
    var answer = 0;
    let odd = 0;
    let even = 0;
    num_list.forEach((e, i) => {
        if((i + 1) % 2 === 0) even += e;
        else odd += e;
    })
    
    answer = odd > even ? odd : even;
    return answer;
}