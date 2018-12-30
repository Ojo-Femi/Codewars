var moveZeros = function (arr) {
  // TODO: Program me
  //find non zero elements
  let ret = arr.filter(x => x !== 0);
  //find zero elements
  let ter = arr.filter(x => x === 0);

  //concatenate them
  return ret.concat(ter);
}