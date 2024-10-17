function solution(todo_list, finished) {
    var answer = [];
    todo_list.forEach((e, i) => {
        if(!finished[i]) answer.push(e);
    })
    return answer;
}