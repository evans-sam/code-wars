/* eslint-disable no-extend-native */
Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false;
  for (let i = 0; i < this.length; i += 1) {
    if (isArray(this[i]) !== isArray(other[i])) return false;
    if (isArray(this[i]) && isArray(other[i])) if (!this[i].sameStructureAs(other[i])) return false;
  }

  return true;
};
