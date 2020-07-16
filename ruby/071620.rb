require 'prime'
require 'pry'

def gap(g, m, n)
  array = Prime.each(n).to_a - Prime.each(m-1).to_a
  array.each_with_index do |number, index|
    return [array[index - 1], number] if number - array[index - 1] == g
  end
end



puts gap(4,130,200)
