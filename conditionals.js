const raining = true;
const cold = false;
const temp = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Leave your umbrella at home!");
}

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn't such a great idea...");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



