var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var result = []; // this array will store unique elements
  for (var i = 0, length = iterable.length; i < length; i++){
  // we step through the elements in iterable from the beginning to the end
    if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
      // and add an element to the result array every time this is different from the following element
      result.push(iterable[i]);
    }
  }
  return result;
}