function josephus(items,k){
  //my code here with 1000 help
  let counter = 0;
  let result = [];
  let index = -1;
  
  while (items.length > 0){
    //splice the array and push it to a result
    counter++; index++;
    index = index >= items.length ? 0 : index;
    //if counter = count, affect the array and push the item to the result array
    if (counter === k) {
      //push the current item to the array
      result.push(items.splice(index, 1)[0]);
      
      //restart the counter;
      counter = 0;
      
      //because the array has been modified, you'll have to take one step back
      index--;
    }
  }
  //finally, return the result
  return result;
}