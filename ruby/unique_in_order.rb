def unique_in_order(iterable)
  (iterable.is_a?(String) ? iterable.split('') : iterable)
    .reduce([]) { |acc, element| acc[-1] == element ? acc : acc.concat([element]) }
end

unique_in_order('AAAABBBCCDAABBB')
