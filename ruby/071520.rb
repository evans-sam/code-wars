require 'pry'
require 'prime'
require 'bigdecimal'

def rot13(string)
  origin = ('a'..'z').to_a.join + ('A'..'Z').to_a.join
  cipher = ('a'..'z').to_a.rotate(13).join + ('A'..'Z').to_a.rotate(13).join
  string.tr(origin, cipher)
end

def isPP(n)
  Prime.each(n) do |prime|
    result = (BigDecimal(n)**(1.0 / prime)).to_f
    return [result.to_i, prime] if (result % 1).zero?
  end
  return nil
end

def gap(g, m, n)
  Prime.each(n) do |prime|
    binding.pry
  end
end

