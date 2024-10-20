function solution(nums) {
    var answer = 0;
    
    let spices = new Set(nums).size;
    if(nums.length / 2 < spices) return nums.length/2;
    answer = spices;
    
    return answer;
}