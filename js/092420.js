function anagrams(word, words) {
  return words.filter(element => isAnagram(word)(element))
}

const isAnagram = (word1) => {
  return (word2) => {
    return word1.split('').sort().join('') == word2.split('').sort().join('')
  }
}
