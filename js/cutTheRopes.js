function cutTheRopes(ropes, counts = [ropes.length]) {
  const shortestRope = ropes.reduce((min, rope) => (rope < min && rope > 0 ? rope : min), Infinity);
  const cutRopes = ropes.map((rope) => rope - shortestRope);
  const count = cutRopes.filter((rope) => rope > 0).length;
  return count > 0 ? cutTheRopes(cutRopes, [...counts, count]) : counts;
}

console.log(cutTheRopes([3, 3, 2, 9, 7]), [5, 4, 2, 1]);

console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]);

console.log(cutTheRopes(
  [13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056],
), [10, 9, 6, 5, 3, 1]);
