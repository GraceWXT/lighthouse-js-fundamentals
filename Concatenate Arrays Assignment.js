const concat = function (arrayOne, arrayTwo) {
  let newArray = [];
  if (arrayOne.length > 0) {
    for (let elementOne of arrayOne) {
      newArray.push(elementOne);
    }
  }
  if (arrayTwo.length > 0) {
    for (let elementTwo of arrayTwo) {
      newArray.push(elementTwo);
    }
  }
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);