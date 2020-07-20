function createPhoneNumber(numbers) {
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(4,7).join('')}-${numbers.slice(-4).join('')}`;
}