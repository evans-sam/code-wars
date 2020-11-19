const abbreviate = (string) => {
  const a8e = (word) => {
    const stripped = word.replace(/[^a-z]/gi, '');
    const punctuation = word.replace(/[a-z]/gi, '');
    return (stripped.length > 3
      ? stripped.charAt(0) + (stripped.length - 2) + stripped.slice(-1)
      : stripped) + punctuation;
  };
  const toA8e = (word) => (word.split('-').length > 1
    ? word.split('-').map(a8e).join('-')
    : a8e(word));

  return string
    .split(' ')
    .map(toA8e)
    .join(' ');
};
console.log(abbreviate('internationalization'), 'i18n');
console.log(abbreviate('accessibility'), 'a11y');
console.log(abbreviate('Accessibility'), 'A11y');
console.log(abbreviate('elephant-ride'), 'e6t-r2e');
