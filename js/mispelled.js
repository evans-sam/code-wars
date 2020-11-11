const mispelled = (word1, word2) => {
  return [...word2].reduce((count, c, i) => c === word1[i] ? count : count + 1, 0) <= 1 
};
