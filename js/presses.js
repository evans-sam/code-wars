const presses = (phrase) => {
  const keypad = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];

  return [...phrase.toUpperCase()]
    .map((c) => [keypad.findIndex((key) => key.includes(c)), c])
    .map(([i, c]) => keypad[i].indexOf(c) + 1)
    .reduce((sum, keyPresses) => sum + keyPresses, 0);
}