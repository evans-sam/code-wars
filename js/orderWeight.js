const slowOrderWeight = (string) => Object.values(string
  .split(' ')
  .reduce((acc, x) => {
    const weight = [...x].reduce((sum, d) => +d + sum, 0);
    return {
      ...acc,
      [weight]: [...acc[weight] || [], x],
    };
  }, {}))
  .map((array) => array.sort())
  .reduce((acc, arr) => [...acc, ...arr], [])
  .join(' ');

const orderWeight = (string) => string
  .split(' ')
  .sort((a, b) => (
    [...a].reduce((sum, d) => +d + sum, 0)
     - [...b].reduce((sum, d) => +d + sum, 0)
    || a.localeCompare(b)))
  .join(' ');
