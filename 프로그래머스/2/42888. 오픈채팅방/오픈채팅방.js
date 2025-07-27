function solution(record) {
    var answer = [];
    let ans = {};
    
    record.forEach(e => {
        if(!e.includes("Leave")) {
            let [_, id, name] = e.split(" ");
            ans[id] = name;   
        }
    });
    
    record.forEach(e => {
        let [type, id, name] = e.split(" ");
        
        if(type !== "Change") {
            let ment = type === "Enter" ? "들어왔습니다." : "나갔습니다.";
            answer.push(ans[id] + "님이 " + ment);
        }
    })
    
    return answer;
}