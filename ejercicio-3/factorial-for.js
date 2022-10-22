let factorial = 1;
for (let i = 10; i > 1; i--) {
  factorial *= i;
  // 1      *= 10
  // 1      *= 9
  // 1      *= 8
  // 1      *= 7
  // 1      *= 6
  // 1      *= 5
  // 1      *= 4
  // 1      *= 3
  // 1      *= 2
  // 10*9*8*7*6*5*4*3*2 =3628800
  // console.log(i);
  console.log(factorial);
}
