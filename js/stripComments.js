const solution = (input, markers) => input
  .split('\n')
  .map((string) => {
    markers.forEach((marker) => {
      string = string.includes(marker)
        ? string.slice(0, string.indexOf(marker))
        : string;
    });
    return string.trim();
  }).join('\n');

console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!'], 'apples, plums\npears\noranges'));
console.log(solution('Q @b\nu\ne -e f g', ['@', '-'], 'Q\nu\ne'));
