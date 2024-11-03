function solution(s) {
    const elements = s.split(' ');
    let result = 0;
    let lastNumber = 0;
    
    for (let elem of elements) {
        if (elem === 'Z') {
            result -= lastNumber;   
        } else {
            lastNumber = parseInt(elem); 
            result += lastNumber;  
        }
    }
    
    return result;
}