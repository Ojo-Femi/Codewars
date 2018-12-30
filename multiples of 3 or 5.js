function solution(number){
  let x = 1, arr = [];
  for (x; x < number; x++) {
  if (x%3 == 0 || x%5 == 0){
    arr.push(x)
  }
  }
  return arr.length ? arr.reduce( (a,b) => a + b ) : 0;
}