function solution(msg) {
  const dictionary = {};
  let nextIndex = 1;
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = nextIndex++;
  }

  const result = [];
  let i = 0;

  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    while (j <= msg.length && dictionary[msg.slice(i, j)]) {
      w = msg.slice(i, j);
      j++;
    }

    result.push(dictionary[w]);

    const c = msg[j - 1]; 
    if (j <= msg.length) {
      dictionary[w + c] = nextIndex++;
    }

    i += w.length;
  }

  return result;
}
