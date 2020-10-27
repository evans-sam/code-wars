function uglifyWord(word) {
  let flag = true;
  const re = new RegExp(/[a-zA-Z]/);
  const toUglyC = (c) => (flag ? c.toUpperCase() : c.toLowerCase());
  const toUglyWord = (character) => {
    let result = character;
    if (re.test(character)) {
      result = toUglyC(character);
      flag = !flag;
    } else {
      flag = true;
    }
    return result;
  };

  return word
    .split('')
    .map(toUglyWord)
    .join('');
}

export default uglifyWord;
