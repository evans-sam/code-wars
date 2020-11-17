// HORRIBLE KATA

function partitionOn(pred, items) {
  const array = [...items];
  items.length = 0;
  items.push(...array.filter((e) => pred(e)));
  items.unshift(...array.filter((e) => !pred(e)));

  return items.findIndex((e) => pred(e));
}
