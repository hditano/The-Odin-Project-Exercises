const repeatString = function(arg1, arg2) {
  if(arg2 < 0 ) return 'ERROR';
  let total = '';
  for(let i = 0; i < arg2; i++) {
    total += arg1;
  }
  return total;
}

module.exports = repeatString
