function convert(string) {
  const set = [...new Set(string.toLowerCase())];

  return +string
    .toLowerCase()
    .split('')
    .map((letter) => {
      const index = set.indexOf(letter);
      return (index <= 1 ? Math.abs(index - 1) : index).toString();
    })
    .join('');
}

export default convert;

console.log(convert('CodeWars'), 10234567);
console.log(convert('KATA'), 1020);
