function toUnderscore(strin) {
	let string = String(strin);
  // TODO: complete
  let result = '';
    for (var leta of string){
        if (leta == leta.toUpperCase() && string.indexOf(leta) !== 0 && Number(leta) != leta){
            result += '_'+leta.toLowerCase();
        } else {
            result+= leta.toLowerCase();
        }
    }
	return result;
}