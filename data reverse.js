function dataReverse(arr){
    let result1 = [], result2 = []
    for (var i =0; i < arr.length; i+=8){
        result1.push(arr.slice(i, i+8))
    }
	result1 = result1.reverse();
	for (var x of result1){
		result2.push(...x);
    }
	return result2
}