function persistence(num) {
  const digits = Math.floor(Math.log10(num));
  return (num / 10) * (num % 10);
}
