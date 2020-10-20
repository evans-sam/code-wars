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


// const score = dice => {
//   let result = 0
//   const scoreCard = {
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//   }
  
//   for(let die of dice) {
//     scoreCard[die] += 1
//   }
  
//   if(scoreCard[1] >= 3){
//     result += 1000 
//     scoreCard[1] -= 3
//   } 
  
//   if(scoreCard[6] >= 3) result += 600
//   if(scoreCard[4] >= 3) result += 400
//   if(scoreCard[3] >= 3) result += 300
//   if(scoreCard[2] >= 3) result += 200
  
//   if(scoreCard[5] >= 3) {
//     result += 500
//     scoreCard[5] -= 3
//   }
  
//   result += scoreCard[5] * 50
//   result += scoreCard[1] * 100
  
//   return result
// }

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

console.log(score( [4, 4, 4, 3, 3] ))
console.log(score( [2, 3, 4, 6, 2] ))
console.log(score( [2, 4, 4, 5, 4] ))