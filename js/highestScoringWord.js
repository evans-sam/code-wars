function high(string) {
  const stringArray = string.split(' ')
  const letterScore = (letter) => ' abcdefghijklmnopqrstuvwxyz'.indexOf(letter)
  const score = (word) => [...word].reduce((sum, c) => sum + letterScore(c), 0);
  const scoresMap = stringArray.map(score);
  const winnerIndex = scoresMap.indexOf(Math.max(...scoresMap))
  return stringArray[winnerIndex];
}

const high = (string) => {
  const score = (word) => [...word].reduce((sum, c) => sum + ' abcdefghijklmnopqrstuvwxyz'.indexOf(c), 0);
  return string
    .split(' ')
    .reduce((acc, word) => score(word) > acc.score ? {score: score(word), word : word } : acc, {score: 0, word: ''})
    .word

}