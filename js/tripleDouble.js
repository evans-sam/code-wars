const tripledouble = (num1, num2) => +[...Array(10).keys()]
  .map((n) => n.toString())
  .some((num) => num1.toString().includes(num.repeat(3))
    && num2.toString().includes(num.repeat(2)))