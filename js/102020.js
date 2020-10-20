const isPP = n =>{
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


const comp = (array1, array2) => {

  return array1 && array2 ? 
    (
      array1
        .map(x => x * x)
        .sort((x, y) => x - y)
        .join('')
    ) == (
      array2
        .sort((x, y) => x - y)
        .join('')
    ) : (
      false
    )
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);