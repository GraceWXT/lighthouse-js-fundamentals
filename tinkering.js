/*
function multiply(a, b) {
  return a * b
}
const result = multiply(2, 4)
console.log(result)

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + name);
  var greeting;
}
*/

/*
let catSays = function (max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

let catSings = function (max) {
  let catLyric = "";
  for (let i = 0; i < max; i++) {
    catLyric += "la";
  }
  return catLyric;
};

function helloCat(callbackFunc, max) {
  return "Hello " + callbackFunc(max);
}

console.log(helloCat(catSings, 3))
*/

/*
function helloCat(catFunc, max) {
  return "Hello" + catFunc(3);
}
console.log(helloCat(function catSing(max) {
  let catLyric = "";
  for (let i = 0; i < max; i++) {
    catLyric += "la";
  }
  return catLyric;
}, 3))
*/

var laugh = function(n) {
  let sound = "";
  for (i = 0; i < n; i++ ){
  sound += "ha"}
  return sound += "!";
  }

console.log(laugh(10));