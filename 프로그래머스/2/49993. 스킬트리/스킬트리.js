function solution(skill, skill_trees) {
  const skillOrder = skill.split("");

  const validTrees = skill_trees.filter((tree) => {
    let current = 0;

    for (const s of tree) {
      if (!skillOrder.includes(s)) continue;
      if (s !== skillOrder[current]) return false;
      current++;
    }

    return true;
  });

  return validTrees.length;
}
