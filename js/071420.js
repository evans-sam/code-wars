
function maskify(cc) {
  cc = cc.split("");
  for(i = 0; i + 4 < cc.length; i++) {
    cc[i] = "#"
  }
  return cc.join("")
}
