const nextHappyYear = (year) => {
  const isHappy = (y) => y.toString().length === [...new Set([...y.toString()])].length;
  const findNext = (y) => isHappy(y) ? y : findNext(y + 1);

  return findNext(year + 1);
};

function nextHappyYear(year){
  let happyYear = year + 1;
  while(true) {
    const yearArray = [...happyYear.toString()]
    if (yearArray.length === [...new Set(yearArray)].length) return happyYear
    happyYear += 1
  }
}