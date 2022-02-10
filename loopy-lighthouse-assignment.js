for (let n = 100; n <= 200; n++) {
  n % 3 === 0 ? (n % 4 === 0 ? console.log("LoopyLighthouse") : console.log("Loopy")) : (n % 4 === 0 ? console.log("Lighthouse") : console.log(n));
}