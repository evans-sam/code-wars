function wordPattern(word) {
  const set = [...new Set(word.toLowerCase())];

  return word
    .toLowerCase()
    .split('')
    .map((letter) => set.indexOf(letter))
    .join('.');
}

export default wordPattern;
