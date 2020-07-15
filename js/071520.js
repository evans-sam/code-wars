function findOdd(array) {
  let return_value;
  array.forEach((element) => {
    var count = 0;
    for (i = 0; i < array.length; i++) {
      if(array[i] == element) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return_value = element; 
    }
  });
  return return_value;
}
