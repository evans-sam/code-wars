const whatCentury = (year) => {
  const centuryN = +(+year - 1).toString().slice(0, 2) + 1;
  return ordinal(centuryN);
};

const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
