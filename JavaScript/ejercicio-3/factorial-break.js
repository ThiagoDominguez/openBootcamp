let num = 10;
let factorial = 1;
while (true) {
  factorial *= num;
  num--;
  console.log(factorial);
  if (num === 1) {
    console.log("conseguimos el factorial de 10!");
    break;
  }
}
