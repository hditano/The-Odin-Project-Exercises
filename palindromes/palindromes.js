const palindromes = function (str) {
  var reversedText  = str.split('').reverse().join('');


return str === reversedText;

};
module.exports = palindromes;
