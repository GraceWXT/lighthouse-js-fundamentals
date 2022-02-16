const range = function (start, end, step) {
  let array = [];
  if (step <= 0 || start > end || start === undefined || end === undefined || step === undefined)
    return array;
  else {
    while (start <= end) {
      array.push(start);
      start += step;
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));