function helloWorld() {
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
}

function perimeter(a, b) {
  let perimeter = 2 * (a + b);
  console.log("Perimeter of", a, "and", b, "is", perimeter);
  return perimeter;
}

function areEqual(a, b) {
  if (a === b) {
    console.log(a, b, "are equal");
    return true;
  } else {
    console.log(a, b, "are not equal");
    return false;
  }
}

helloWorld();
perimeter(5, 6);
areEqual(5, 6);
areEqual(5, 5);
