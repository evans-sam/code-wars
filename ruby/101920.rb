require 'set'
require 'prime'

def proper_fractions(n)
  puts n
  return 0 unless n > 1

  n_factors = factors(n)

  if n_factors.empty?
    n - 1
  else
    n_factors
      .select { |factor| Prime.prime?(factor) }
      .reduce(n) { |sum, factor| sum * (1 - 1 / factor) }
  end
end

def factors(n)
  [*2..Math.sqrt(n)].reduce(Set.new) { |factors, i| (n % i).zero? ? factors.add(i) && factors.add(n / i) : factors }
end
