function encrypt(text, n) {
  const result = [...text].filter((c, i) => i % 2).join('') + [...text].filter((c, i) => !(i % 2)).join('');
  return n > 0 ? encrypt(result, n - 1) : text;
}

function decrypt(text, n) {
  const result = [...text].filter((c, i) => !(i % 2)).join('') + [...text].filter((c, i) => i % 2).join('')
  return n > 0 ? encrypt(result, n - 1) : text;
}