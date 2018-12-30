function findEvenIndex(arr){
  //Code goes here!
  let tryarr;  let rightarr;
    for (let i = 1; i < arr.length; i++){
        //slice the array and compute the values of the left and right sides
        tryarr = [...arr];
        rightarr = tryarr.splice(i);
		let rightarrsum = rightarr.reduce( (a,b) => a+b);
		let leftarrsum = tryarr.reduce( (a,b) => a+b) - arr[i - 1];
		if (leftarrsum === rightarrsum){
			return i - 1;
        }
    }
	return -1;
}