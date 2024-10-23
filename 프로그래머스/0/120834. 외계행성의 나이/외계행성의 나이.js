function solution(age) {
    let ageString = age.toString(); 
    let result = ''; 

    for (let char of ageString) { 
        let digit = parseInt(char); 
        result += String.fromCharCode(97 + digit); 
    }

    return result; 
}