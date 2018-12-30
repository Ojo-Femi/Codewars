var countBits = function(n) {
  // Program Me
  return n.toString(2).split('').filter( x => x == 1).length
};