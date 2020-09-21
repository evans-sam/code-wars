function isMerge(string, part1, part2) {
  
  string = string.split('')
  part1 = part1.split('')
  part2 = part2.split('')
  
  console.log(string, part1, part2)

  if (string.length == 0) {
    return true;
  } else if(string[0] == part1[0]) {
    return isMerge(string.slice(1).join(), part1.slice(1).join(), part2.join())
  } else if(string[0] == part2[0]) {
    return isMerge(string.slice(1).join(), part1.join(), part2.slice(1).join())
  } else {
    return false;
  }
}

console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars'));
