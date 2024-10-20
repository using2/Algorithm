function solution(s) {
    var answer = 0;
    
    let numString = {
        "zero" : 0,
    	"one" : 1,
    	"two" : 2,
    	"three" : 3,
    	"four" : 4,
    	"five" : 5,
    	"six" : 6,
    	"seven" : 7,
    	"eight" : 8,
    	"nine" : 9
    };
    
    Object.keys(numString).forEach((e) => {
        if(s.indexOf(e) !== -1) {
            s = s.replaceAll(e, numString[e]);
        }
    })
    answer = parseInt(s);
    
    return answer;
}