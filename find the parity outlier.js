function findOutlier(integers){
  //your code here
	if (integers.filter(x => x%2 === 0).length > 1){
    	return integers.filter(x => x%2 !== 0)[0];
	} else {
		return integers.filter(x => x%2 === 0)[0]
    }
}