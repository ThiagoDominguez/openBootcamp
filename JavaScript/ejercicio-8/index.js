function trueFunc() {
  return true;
}

const promise = () => {
  console.log("Hola soy una promesa");
};

setTimeout(promise, 5000);

promise();

function* genFunc() {
  let id = 0;
  while (true) {
    id += 2;
    if (id === 20) {
      return id;
    }
    yield id;
  }
}

const genConst = genFunc();

console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
console.log(genConst.next().value);
