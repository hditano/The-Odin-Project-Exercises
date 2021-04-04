const ftoc = function(tempF) {
  let number =  (tempF - 32) / 1.8;
  return Math.round(number * 10) / 10;
}

const ctof = function(tempC) {
  let number =  (tempC * 1.8) + 32;
  return Math.round(number * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
