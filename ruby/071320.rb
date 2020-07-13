require 'pry'

# def disemvowel(str)
#   array = str.split(//)
#   new_array = []
#   vowels = ['a','e','i','o','u']
#   array.map do |letter|
#     new_array << letter if  !is_vowel_array(letter)
#   end
#   new_array.join
# end

# def is_vowel_array(letter)
#   ["a", "e", "i", "o", "u"].include?(letter.downcase)
# end

def disemvowel str
  str.delete('aeiouAEIOU')
end
