function toWeirdCase(string) {
  return string.split(' ').map(weirdCase).join(' ');
}

function weirdCase(string) {
  const charArray = string.split('');
  for (i = 0; i < charArray.length; i ++) {
    i % 2 === 0 ? charArray[i] = charArray[i].toUpperCase() : charArray[i] =  charArray[i].toLowerCase();
  }
  return charArray.join('');
}