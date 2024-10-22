function solution(clothes) {
    var answer = 1;
    const organizeClothes = {};
    
    clothes.forEach(([name, type]) => {
        if (organizeClothes[type]) {
            organizeClothes[type].push(name);
        } else {
            organizeClothes[type] = [name];
        }
    });
    
    for(let type in organizeClothes) {
        answer *= (organizeClothes[type].length + 1);
    }
    
    answer--;
    
    return answer;
}