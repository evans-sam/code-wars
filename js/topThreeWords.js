const topThreeWords = (text) => {
  const counts = text
    .toLowerCase()
    .replace(/[^a-z'\s]/gi, '')
    .split(' ')
    .filter((c) => !!c && c !== "'")
    .reduce((acc, word) => ({ ...acc, [word]: acc[word] + 1 || 1 }), {});

  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 3);
};
