def format_duration(seconds)
  s = 's'
  duration = {
    year: (seconds / 24 / 60 / 60 / 365).floor,
    day: (seconds / 24 / 60 / 60 % 365).floor,
    hour: (seconds / 60 / 60 % 24).floor,
    minute: (seconds / 60 % 60).floor,
    second: (seconds % 60)
  }

  english = duration
            .map { |time, value| !value.zero? ? "#{value} #{time}#{value > 1 ? s : ''}" : '' }
            .reject { |time| time == '' }
  english.length > 1 ? "#{english[0..-2].join(', ')} and #{english[-1]}" : english[0] || 'now'
end
