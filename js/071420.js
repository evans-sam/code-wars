
function maskify(cc) {
  cc = cc.split("");
  for(i = 0; i + 4 < cc.length; i++) {
    cc[i] = "#";
  }
  return cc.join("");
}

function digital_root(n) {
  if (n < 10) {
    return n;
  }
  var n_array = n.toString().split('').map(el=>parseInt(el));
  n = n_array.reduce((a, b) => a + b, 0);
  return digital_root(n);
}

function descendingOrder(n) {
  var n_array = n.toString().split('');
  return parseInt(n_array.sort().reverse().join(""));
}
