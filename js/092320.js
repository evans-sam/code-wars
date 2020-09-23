function sumIntervals(intervals) {
  const result = [];

  intervals.forEach(interval => {
    for(let i = interval[0]; i < interval[1]; i++) {
      result[i] = 1
    }
  })

  return result.length;
}