function solution(ingredient) {
    var answer = 0;
    let now = 0;
    const target = [1, 2, 3];
    let stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        if(ingredient[i] === 1) {
            const lastThree = stack.slice(stack.length - 3);
            
            if (target.length === lastThree.length 
                && target.every((v, i) => v === lastThree[i])) {
                stack.splice(stack.length - 3);
                answer++;
                continue;
            }
        }
        
        stack.push(ingredient[i]);
    }
    
    return answer;
}