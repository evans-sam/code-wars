const decode = (message, contents) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const decoded = (c) => (i) => alphabet[(alphabet.indexOf(c) + i) % 26];
  const possibilities = [...Array(26)];

  return possibilities.map((e, i) => (
    [...message].map((c) => decoded(c)(i)).join('')
  )).filter((decodedMessage) => decodedMessage.includes(contents));
};
