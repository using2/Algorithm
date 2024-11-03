function solution(myStr) {
    const parts = myStr.split(/[abc]/);
    const result = parts.filter(part => part.length > 0); 

    return result.length > 0 ? result : ["EMPTY"];
}