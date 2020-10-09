

function rot13(string) {
  return string
    .split('')
    .map(character => character.match(/^[A-Za-z]+$/) ? character = key[character] : character)
    .join('')
}

const key = {
  'a': 'n',
  'b': 'o',
  'c': 'p',
  'd': 'q',
  'e': 'r',
  'f': 's',
  'g': 't',
  'h': 'u',
  'i': 'v',
  'j': 'w',
  'k': 'x',
  'l': 'y',
  'm': 'z',
  'n': 'a',
  'o': 'b',
  'p': 'c',
  'q': 'd',
  'r': 'e',
  's': 'f',
  't': 'g',
  'u': 'h',
  'v': 'i',
  'w': 'j',
  'x': 'k',
  'y': 'l',
  'z': 'm',
  'A': 'N',
  'B': 'O',
  'C': 'P',
  'D': 'Q',
  'E': 'R',
  'F': 'S',
  'G': 'T',
  'H': 'U',
  'I': 'V',
  'J': 'W',
  'K': 'X',
  'L': 'Y',
  'M': 'Z',
  'N': 'A',
  'O': 'B',
  'P': 'C',
  'Q': 'D',
  'R': 'E',
  'S': 'F',
  'T': 'G',
  'U': 'H',
  'V': 'I',
  'W': 'J',
  'X': 'K',
  'Y': 'L',
  'Z': 'M',
}

function add(str1, str2) {
  let sum = ""
  let arrayA = str1.length >= str2.length
    ? str1.split('')
    : str2.split('')
  let arrayB = str1.length >= str2.length
    ? str2.split('')
    : str1.split('')

  let carry = 0

  for (let i = 0; i < arrayA.length; i++) {
    let a = +arrayA[arrayA.length - 1 - i]
    let b = +arrayB[arrayB.length - 1 - i]
    b = b ? b : 0  

    let abSum = (carry + a + b).toString()
    
    let lastDigit = abSum.slice(-1)   
    carry = +abSum.slice(0, -1)
    carry = carry ? carry : 0

    sum = (i === arrayA.length - 1)
      ? abSum + sum
      : lastDigit + sum
  }

  return sum
}

const add = (stringA, stringB) => {
  let sum = '', carry = 0
  let arrayA = stringA.split('')
  let arrayB = stringB.split('')

  while(arrayA.length || arrayB.length || carry) {
    carry += ~~arrayA.pop() + ~~arrayB.pop()
    sum = carry % 10 + sum
    carry = carry > 9
  }

  return sum
}

function middlePermutation(string) {
  const permutations = permute(string).sort()
  let i = ~~(permutations.length / 2) - 1
  return permutations[i]
}

const permute = (string) => {
  if(string.length < 2) return string
  let permutations = []
  for(let i = 0; i < string.length; i++) {
    const char = string[i]

    if(string.indexOf(char) != i) continue

    const remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

    for(let subPerm of permute(remainingString)) {
      permutations.push(char + subPerm)
    }
  }
  return permutations
}