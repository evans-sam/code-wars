const arrayLeaders = (numbers) => numbers.reduceRight(({ sum, leaders }, n) => ({
  leaders: n > sum ? [n, ...leaders] : leaders,
  sum: sum + n,
}), {
  leaders: [],
  sum: 0,
}).leaders;
