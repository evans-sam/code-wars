require 'pry'

def number lines
  lines.map.with_index(1) { |string, i| "#{i}: #{string}" }
end

def is_sorted_and_how(array)
  if array == array.sort
    'yes, ascending'
  elsif array == array.sort.reverse
    'yes, descending'
  else
    'no'
  end
end

def reverse_words(string)
  string.gsub(/\S+/, &:reverse)
end
