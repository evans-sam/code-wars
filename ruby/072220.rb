require 'pry'

class User
  attr_reader :progress, :rank

  def initialize
    @rank = -8
    @progress = 0
  end

  def inc_progress(rank)
    return valid_rank(rank) unless valid_rank(rank)

    if rank == @rank
      @progress += 3
    elsif rank > @rank
      d = rank - @rank
      @progress += (10 * d * d)
    elsif rank == @rank - 1
      @progress += 1
    end
    rankup
  end

  private

  def valid_rank(rank)
    if rank < 9 && rank > -9 && rank != 0
      true
    else
      false
    end
  end

  def rankup
    while @progress >= 100
      binding.pry
      @rank += 1
      @progress -= 100
    end
  end
 
  def progress=(delta)
    if @rank <= 8
      @progress = 0
    else
      @progress = delta
    end
  end

  def rank=(delta)
    @rank = delta
    if @rank.zero?
      @rank = 1
    elsif @rank == 8
      @progress = 0
      @rank = 0
    else
      @rank
    end
  end
end

sam = User.new

binding.pry
