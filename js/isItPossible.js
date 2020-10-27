function isItPossible(field) {
  const counts = field.split('').reduce((acc, c) => ({ ...acc, [c]: (acc[c] || 0) + 1 }), {});

  return counts;
}