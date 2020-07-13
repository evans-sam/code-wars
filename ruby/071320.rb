
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
