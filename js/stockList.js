const stockList = (L, M) => ((L.length === 0 || M.length === 0)
  ? ''
  : Object.entries(L
    .map((listItem) => listItem.split(' '))
    .map(([code, n]) => [code[0], +n])
    .filter(([c, _n]) => M.includes(c))
    .reduce((acc, [c, n]) => ({ ...acc, [c]: acc[c] + n }),
      M.reduce((acc, c) => ({ ...acc, [c]: 0 }), {})))
    .map(([c, n]) => `(${c} : ${n})`)
    .join(' - '));

let b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
let c = ['A', 'B'];
let res = '(A : 200) - (B : 1140)';
console.log(stockList(b, c), res);

b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
c = ['A', 'B', 'C', 'W'];
res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
console.log(stockList(b, c), res);
