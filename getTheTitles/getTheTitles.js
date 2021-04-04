const getTheTitles = function(array) {
  const newArray =  array.map(titles => titles.title);
  return newArray;
}

module.exports = getTheTitles;
