const findMissingLetter = (array) => {
  const start = array.join('').charCodeAt(0);
  const charCode = array.find((c, i) => start + i !== c.charCodeAt(0)) + 1;
  return String.fromCharCode(charCode);
};
