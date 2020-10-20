const properFractions = n => {
  const nFactors = [...factors(n)]
  
  return !!nFactors.length
    ? nFactors
      .filter(isPrime)
      .reduce((sum, divisor) => Math.floor(sum * (1 - 1 / divisor)), n)
    : n - 1
}

const factors = n => {
  const factors = new Set()

  for(let i = 2; i * i <= n; i++)
    n % i === 0
      ? factors.add(i) && factors.add(n / i)
      : null

  return factors
}

const isPrime = n => {
  for(let i = 2; i * i <= n; i++)
    if( n % i === 0 ) return false
  return n > 1
}


const score = dice => {
  const scoreCard = {
    0: n => 0,
    1: n => 1000 * Math.floor(n / 3) + 100 * (n % 3),
    2: n => scoreCard.default(n)(2),
    3: n => scoreCard.default(n)(3),
    4: n => scoreCard.default(n)(4),
    5: n => 500 * Math.floor(n / 3) + 50 * (n % 3),
    6: n => scoreCard.default(n)(6),
    default: n => i => Math.floor(n / 3) * 100 * i
  }
  
  return dice
  .reduce((counts, i) => {
    counts[i] += 1
    return counts
  }, [0,0,0,0,0,0,0])
  .reduce((sum, count, i) =>sum += scoreCard[i](count), 0)  
}
export { properFractions }