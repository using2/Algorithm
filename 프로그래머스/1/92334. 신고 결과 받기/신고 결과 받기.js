function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const reported = Array(id_list.length).fill(0);
    
    const idIndexMap = {};
    id_list.forEach((id, idx) => {
        idIndexMap[id] = idx;
    });

    let setReport = [...new Set(report)].map(e => e.split(" "));

    setReport.forEach(([reporter, reportedUser]) => {
        const reportedIdx = idIndexMap[reportedUser];
        reported[reportedIdx]++;
    });

    setReport.forEach(([reporter, reportedUser]) => {
        const reportedIdx = idIndexMap[reportedUser];  
        if (reported[reportedIdx] >= k) {
            const reporterIdx = idIndexMap[reporter]; 
            answer[reporterIdx]++;
        }
    });

    return answer;
}