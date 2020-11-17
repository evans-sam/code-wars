const bouncingBall = (h, bounce, window) => {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let result = 1;
  while (h > window) {
    h *= bounce;
    result += h > window ? 2 : 0;
  }

  return result;
};
