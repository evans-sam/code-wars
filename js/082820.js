function getGeneration(cells, generations){

}

function comp(array1, array2){
  if( !array2 || !array1 ) return false;
  return (array1.map(x => x * x)).sort().join() === (array2.sort().join())
}