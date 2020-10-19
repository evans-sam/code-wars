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

export { properFractions }
