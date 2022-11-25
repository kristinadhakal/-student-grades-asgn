// Random Library

// return a random decimal b/t low (inclisive) and high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// return a random interger b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// return a random rgb colour - 'rbg(___,__,___)'
function randomRGB() {
  return `rgb(${randomInt(0, 256)},${randomInt(0, 256)}, ${randomInt(0, 256)})`;
}
