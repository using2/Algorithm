function solution(n, words) {
    var answer = [0, 0];
    const success = [];
    let prevWord = "";
    
    for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const lastCharOfPrevWord = prevWord[prevWord.length - 1];
    const firstCharOfCurrentWord = currentWord[0];

        if (prevWord && (lastCharOfPrevWord !== firstCharOfCurrentWord)) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];   
            break;
        }  

        if (success.includes(currentWord)) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];   
            break;
        }

        success.push(currentWord);
        prevWord = currentWord; 
    }

    return answer;
}