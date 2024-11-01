function solution(num_list) {
    let totalOperations = 0;

    for (let num of num_list) {
        let operations = 0;
        
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2; 
            } else {
                num = (num - 1) / 2; 
            }
            operations++;
        }
        
        totalOperations += operations;
    }
    
    return totalOperations;
}