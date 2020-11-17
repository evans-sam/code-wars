def solution (array1, array2)
  array1
    .map
    .with_index { |x, i| (x - array2[i])**2 }
    .reduce { |sum, x| sum + x }
    .to_f / array1.length
end