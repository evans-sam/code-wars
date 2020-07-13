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
  result = n_array.map.with_index do |digit, index|
    digit**(p + index)
  end.reduce(:+)
  (result % n).zero? ? result / n : -1
end

def isTriangle(a,b,c)
  a, b, c = [a, b, c].sort
  a + b > c
end
