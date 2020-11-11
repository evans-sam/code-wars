const isTriangleNumber = (number) => {
  for (let i = 0; i * i < number; i += 1) {
    if ((i * (i + 1)) / 2 === number) return true;
  }

  return false;
};
