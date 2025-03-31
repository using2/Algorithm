function solution(relation) {
  let rowLen = relation.length;
  let colLen = relation[0].length;
  let candidateKeys = [];

  function isUnique(columns) {
    let seen = new Set();
    for (let row of relation) {
      let tuple = columns.map(col => row[col]).join(',');
      if (seen.has(tuple)) return false;
      seen.add(tuple);
    }
    return true;
  }

  function isMinimal(columns) {
    return !candidateKeys.some(key => key.every(k => columns.includes(k)));
  }

  function findCandidateKeys() {
    let totalColumns = Array.from({ length: colLen }, (_, i) => i);
    let subsets = [];
    
    for (let i = 1; i < (1 << colLen); i++) {
      let subset = [];
      for (let j = 0; j < colLen; j++) {
        if (i & (1 << j)) subset.push(j);
      }
      subsets.push(subset);
    }
    
    subsets.sort((a, b) => a.length - b.length);
    
    for (let subset of subsets) {
      if (isUnique(subset) && isMinimal(subset)) {
        candidateKeys.push(subset);
      }
    }
  }

  findCandidateKeys();
  return candidateKeys.length;
}
