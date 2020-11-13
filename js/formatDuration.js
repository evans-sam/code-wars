const formatDuration = (seconds) => {
  const duration = {
    year: Math.floor(seconds / (24 * 3600 * 365)),
    day: Math.floor((seconds % (24 * 3600 * 365)) / (24 * 3600)),
    hour: Math.floor((seconds % (24 * 3600)) / 3600),
    minute: Math.floor((seconds % 3600) / 60),
    second: seconds % 60,
  };
  const english = Object.keys(duration)
    .map((t) => (duration[t] ? `${duration[t]} ${t}` : '') + (duration[t] > 1 ? 's' : ''))
    .filter((e) => e);

  return english.length > 1
    ? `${english.slice(0, -1).join(', ')} and ${english.slice(-1)}`
    : english.join('')
    || 'now';
};
