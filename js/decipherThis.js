function decipherThis(str) {
  return str
    .split(' ')
    .map((word) => {
      const [code, rest] = word.match(/[a-z]+|[^a-z]+/gi);
      return String.fromCharCode(+code) + (rest ? (rest.slice(-1) + rest.slice(1, -1) + (rest.length > 1 ? rest[0] : '')) : '');
    })
    .join(' ');
}
