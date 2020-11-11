const getStrings = (city) => {
  const counts = city
    .toLowerCase()
    .split('')
    .filter((c) => c !== ' ')
    .reduce((acc, c) => ({ ...acc, [c]: `${acc[c] || ''}*` }), {});

  return Object.keys(counts)
    .map((c) => `${c}:${counts[c]}`)
    .join(',');
};

console.log(getStrings('Chicago'));
console.log(getStrings('Bangkok'));
console.log(getStrings('Las Vegas'));
