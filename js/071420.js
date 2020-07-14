
function maskify(cc) {
  cc = cc.split("");
  for(i = 0; i + 4 < cc.length; i++) {
    cc[i] = "#";
  }
  return cc.join("");
}

function digital_root(n) {
  var n_array = n.toString().split('').map(el=>parseInt(el));
  while (n_array.length > 1) {
    n = n_array.reduce((a, b) => a + b, 0);
    var n_array = n.toString().split('').map(el=>parseInt(el));
  }
  return n;
}
