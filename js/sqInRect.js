const sqInRect = (length, width, first = true) => {
  if (length === width && first) return null;
  const l = Math.max(length, width);
  const w = Math.min(length, width);

  return w <= 0 ? [1] : [w, ...sqInRect(l - w, w, false)];
}