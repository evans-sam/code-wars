require 'pry'

def disemvowel str
  str.delete('aeiouAEIOU')
end

def openOrSenior(data)
  data.map do |age, handicap|
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  end
end

def find_outlier(integers)
  integers.count(&:even?) > 1 ? integers.find(&:odd?) : integers.find(&:even?)
end

def dig_pow(n, p)
  n_array = n.to_s.chars.map(&:to_i)
  result = n_array.map do |n_index|
    n_index**p
    p += 1
  end
  result = result.reduce(0) { |sum, i| sum + i }
  (result % n).zero? ? result / n : -1
end
