function solution(tickets) {
    var answer = [];
    
    tickets = tickets.sort((a, b) => {
        return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    });
    
    let graph = {};
    
    tickets.forEach(t => {
        graph[t[0]] = graph[t[0]] !== undefined ? [...graph[t[0]], t[1]] : [t[1]];
    });
                    
    let stack = ["ICN"];
    
    while (stack.length) {
        const top = stack[stack.length - 1];
        
        if (graph[top] && graph[top].length > 0) {
            stack.push(graph[top].pop());
        } else {
            answer.push(stack.pop());
        }
    }
    
    return answer.reverse();
}