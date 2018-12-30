// Return the output array, and ignore all non-op characters
function parse( data )
{
  let count = 0, arr = [];
  for (var letter of data){
    if (letter == 'i'){
       count++
    } else if (letter == 'd'){
       count--
    } else if (letter == 's'){
       count *= count
    } else if (letter == 'o'){
       arr.push(count);
    }
}
  return arr;
}