require 'pry'

# def fold_array(array, runs)
#   if runs.zero?
#     array
#   else
#     fold_array(
#       array
#         .slice(0, array.length / 2)
#         .each_with_index.reduce([]) { |acc, (e, i)| acc.concat([e + (array[-i - 1] || 0)]) }
#         .concat(array.slice((array.length / 2).floor, array.length % 2)),
#       runs - 1
#     )
#   end
# end

def fold_array(array, runs)
  runs.zero? ? array : fold_array(folded(array), runs - 1)
end

def folded(array)
  array
    .first((array.size / 2.0).ceil)
    .zip(array.last((array.size / 2.0).floor).reverse)
    .map { |(l, r)| l + r.to_i }
end
