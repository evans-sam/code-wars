var isPP = function(n){
  for(const divisor of divisors(n))
    for(let k = 2; k <= Math.log2(n); k++)
      if(divisor ** k == n) return [divisor, k]

  return null
}

const divisors = n => {
  const divisors = new Set()

  for(let i = 2; i * i <= n; i++)
    if(n % i === 0) divisors.add(i) && divisors.add(n / i)

  return divisors
}