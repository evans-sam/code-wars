const rgb = (...colors) => colors
  .map(toHex)
  .join('');

const toHex = (n) => Math.min(Math.max(0, n), 255)
  .toString(16)
  .toUpperCase()
  .padStart(2, '0');
