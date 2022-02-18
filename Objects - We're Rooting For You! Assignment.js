
/* Could not pass as this function is supposed to take any "metric" 
=> must use element[metric] **not dot, and without''** to read the property

const judgeVegetable = function (vegetables, metric) {
  if (metric === "redness") {
    vegetables.forEach((vegetable) => {
      let winner = vegetable.submitter;
      let highRank = 0;
      if (vegetable.redness > highRank) {
        highRank = vegetable.redness;
        winner = vegetable.submitter;
      }
      return winner;
    }); 
  } else if (metric === "plumpness") {
    vegetables.forEach((vegetable) => {
      let winner = vegetable.submitter;
      let highRank = 0;
      if (vegetable.plumpness > highRank) {
        highRank = vegetable.plumpness
        winner = vegetable.submitter;
      }
      return winner;
    }); 
  }
}
*/

/* Could not pass since [i-1] will be negative (undefined) at some point 
=> must declare a variable "highRank" to compare

const judgeVegetable = function (vegetables, metric) {
  for (i = 0; i < vegetables.length; i++) {
    let vegetable = vegetables[i];
    if (metric === "redness") {
      let winner = vegetables[i].submitter;
      if (vegetable[i].redness > vegetable[i - 1].redness) {
        winner = vegetables[i].submitter;
      }
      return winner;
    } else if (metric === "plumpness") {
      let winner = vegetables[i].submitter;
      if (vegetable[i].plumpness > vegetable[i - 1].plumpness) {
        winner = vegetables[i].submitter;
      }
      return winner;
    }
  }
}
*/




//To pass with forEach:
const judgeVegetableThree = function (vegetables, metric) {
  let winner = "";
  let highRank = 0;
  vegetables.forEach((vegetable) => {
    // let highRank cannot be declared here, otherwise it would be reset to zero every time it loops
    if (vegetable[metric] > highRank) {
      highRank = vegetable[metric];
      winner = vegetable.submitter;
    }
  })
  return winner;
}


// To pass with for...of:
const judgeVegetableTwo = function (vegetables, metric) {
  let winner = "";
  let highRank = 0;
  for (let vegetable of vegetables) {
    if (vegetable[metric] > highRank) {
      highRank = vegetable[metric];
      winner = vegetable.submitter;
    }
  }
  return winner;
}


// passed with:
const judgeVegetable = function (vegetables, metric) {
  let winner;
  let highRank = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highRank) {
      highRank = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;
}




const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

let metric = 'redness';

console.log(judgeVegetable(vegetables, metric)); // Should return "Old Man Franklin"



const arrayTwo = [
  {
    submitter: "a",
    m: 10
  },
  {
    submitter: "b",
    m: 25
  },
  {
    submitter: "c",
    m: 12
  }
];

let m = "m";

console.log(judgeVegetableTwo(arrayTwo, m)) // Should return "b"




console.log(vegetables[-1]); // negative index will return undefined
