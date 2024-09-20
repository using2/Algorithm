function solution(n, k) {
    var answer = 0;
    
    let serviceCnt = Math.floor(n / 10);
    let buyDrinkCnt = k < serviceCnt? 0 : k - serviceCnt;
    
    answer = (n * 12000) + (buyDrinkCnt * 2000);
    
    return answer;
}