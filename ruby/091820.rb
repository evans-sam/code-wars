def pick_peaks(array)
  pos = []
  peaks = []
  possible_peak = nil

  (1...array.length).each do |index|
    if array[index] > array[index - 1]
      possible_peak = index
    elsif array[index] < array[index - 1] && possible_peak
      pos << possible_peak
      peaks << array[possible_peak]

      possible_peak = nil
    end
  end

  { 'pos' => pos, 'peaks' => peaks }
end

p pick_peaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])
