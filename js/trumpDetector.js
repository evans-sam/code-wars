function trumpDetector(trumpySpeech) {
  const speech = [...trumpySpeech.toLowerCase()];
  let vowelCount = 0;
  let repeatCount = 0;
  for (let i = 0, last = ''; i < speech.length; i += 1) {
    if (speech[i] === last && 'aeiou'.includes(last)) repeatCount += 1;
    if (speech[i] !== last && 'aeiou'.includes(speech[i])) vowelCount += 1;
    last = speech[i];
  }
  return Math.round((repeatCount / vowelCount) * 100) / 100;
}
