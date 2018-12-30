function pigIt(str){
  //Code here
  let result = "";
  let strice = str.split(' ');
  for (var letter of strice){
	if (letter[0].charCodeAt(0) < 65 || letter[0].charCodeAt(0) > 122){
		result += letter;
    } else{
    	result += letter.slice(1) + letter[0] + "ay ";
    }
  }
  return result.trim();
}