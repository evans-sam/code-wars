const digitSum = (n) => (n > 9
  ? digitSum([...n.toString()].reduce((sum, d) => +d + sum, 0))
  : n
);

const lifePathNumber = (dateOfBirth) => digitSum(
  +dateOfBirth
    .split('-')
    .map((n) => digitSum(+n))
    .join(''),
);
