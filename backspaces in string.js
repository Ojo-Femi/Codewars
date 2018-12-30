function clean_string(s) {
	//... your code ...
  let result = "";
  for (let letter of s){
    if (letter === '#'){
        result = result.slice(0,result.length - 1);
    } else {
        result += letter;
   }
  }
  return result;
};