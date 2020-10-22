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
      [...array1]
        .map(x => x * x)
        .sort((x, y) => x - y)
        .join('')
    ) == (
      [...array2]
        .sort((x, y) => x - y)
        .join('')
    ) : (
      false
    )
}
const mixedFraction = s => {
  const [n, d] = s.split('/').map(x => +x)
  if(d == 0 ) throw "ZeroDError!"
  if(n == 0 ) return '0'
  
  const gcd = a => b => b === 0 ? +a : gcd(b)(a % b)
  const sign = () => n / d < 0 ? '-' : ''
  const integer = () => ~~(n / d) ? Math.abs(~~(n / d)) : ''
  const remainder = () => n % d ? Math.abs((n % d) / gcd(n)(d)) + '/' + Math.abs(d / gcd(n)(d)) : ''
  const space = () => integer() && remainder() ? ' ' : ''

  return sign() + integer() + space() + remainder()
}

const phone = (string, number) => {
  let contact = string
    .split('\n')
    .filter(contact => contact.includes(number))

  if(!contact.length) return `Error => Not found: ${number}`
  else if(contact.length > 1) return `Error => Too many people: ${number}`

  const contactName = contact[0].match(/<(.*?)>/)

  const contactAddress = contact[0]
    .replace(number, '')
    .replace(contactName[0], '')
    .replace(/[;$*/?,:!+]/g, '')
    .replace(/_| +/g, ' ')
    .trim()

  return `Phone => ${number}, Name => ${contactName[1]}, Address => ${contactAddress}`
}

const solution = list => {
  const split = (ranges, n) => {
    if (!ranges.length) {
      ranges.push([n])
    } else {
      let lastRange = ranges[ranges.length - 1]
      let lastN = lastRange[lastRange.length - 1]
      n === lastN + 1 ? lastRange.push(n) : ranges.push([n])
    }

    return ranges
  }

  const rangeToString = range => (
    range.length < 3
      ? range.join(',')
      : range.slice(0,1) + '-' + range.slice(-1)
  )

  return list
    .reduce(split, [])
    .map(rangeToString)
    .join(',')
}

const pigIt = string => {
  return string
    .split(' ')
    .map(word => !word.match(/[!?]/) ? word.substring(1) + word.charAt(0) + 'ay' : word)
    .join(' ')
}

const lastDigit = (list) => {
  return list.reverse().slice(1).reduce((acc, n) => {
    return last(acc, )
  }, list.slice(0,1))
}

const last = (x, y) => {  
  const lastA = x.toString().slice(-1)
  const mod4 = y.toString().slice(-2) % 4
  const exp = mod4 === 0 ? 4 : mod4

  return (lastA ** exp)
}



export { mixedFraction, phone, solution, pigIt, lastDigit }
