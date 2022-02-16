const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let position = [x, y];
  for (let move of moves) {
    switch (move) {
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'west':
        x--;
        break;
      case 'east':
        x++;
        break;
    }
    position = [x, y];
  }
  return position;
}


console.log(finalPosition(moves));



const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let position = [x, y];
  for (let move of moves) {
    if (move === 'north'){
      y++; } 
    else if (move === 'south'){
      y--; } 
    else if (move === 'west'){
      x--; } 
    else if (move === 'east'){
      x++; } 
    position = [x,y]
  }
  return position;
}


const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'north'){
      y++; } 
    else if (move === 'south'){
      y--; } 
    else if (move === 'west'){
      x--; } 
    else if (move === 'east'){
      x++; } 
  }
  return [x, y];
}

console.log(finalPosition(moves));