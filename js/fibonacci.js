const memo = {};

const fibonacci = (n) => {
  console.log(n);
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fib = (n) => {
  let a = 0;
  let b = 1;
  let fN = 1;
  for (let i = 1; i < n; i++) {
    fN = a + b;
    a = b;
    b = fN;
  }

  return fN;
};
// console.log(fibonacci(70), 190392490709135);
// console.log(fibonacci(60), 1548008755920);
// console.log(fib(50), 12586269025);
