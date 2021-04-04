const removeFromArray = function(myArray, elementToRemove) {
  let index = myArray.indexOf(elementToRemove);
  return myArray.splice(index, 1);
}

module.exports = removeFromArray
