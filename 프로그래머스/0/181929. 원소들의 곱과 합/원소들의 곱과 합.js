function solution(num_list) {
    var answer = 0;
    let sum = num_list[0];
    let mul = num_list[0];
    num_list.forEach((e, i) => {
        if(i !== 0) {
            sum += e;
            mul *= e;
        }
    })
    sum = sum ** 2;
    answer = mul < sum? 1 : 0;
    return answer;
}