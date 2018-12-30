function toCamelCase(word){
	let result = "";
	let test = word.split(/[-_]/);
  if (word == ""){
      return '';
  }
	for (var i = 0; i < test.length; i++){
    	if (i == 0 && test[0][0] !== test[0][0].toUpperCase()){
			result += `${test[i][0]}${test[i].slice(1)}`;
        } else {
			result += `${test[i][0].toUpperCase()}${test[i].slice(1)}`;
        }
    }
	return result;
}