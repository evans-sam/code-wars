const sumIntervals = (intervals) => intervals.reduce((set, [start, end]) => {
  for (let i = start; i < end; i += 1) set.add(i);
  return set;
}, new Set()).size;
