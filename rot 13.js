function rot13(str){
    let result = '';
    //loop through the letters of the string
    for (var letter of str){
        //if its not an alphabet or if its a number, add it to the string
        if (letter.match(/\W/) || Number(letter)){
            result += letter;
        } else if (letter === letter.toUpperCase()){ //else if its uppercased?
            //work with upper case characters
            //they are withing the 65 - 90 range
            //if its higher than 90, subtract 13
            //add the formatted letter to the result
			      let leta = letter.charCodeAt(0) + 13 > 90 ? letter.charCodeAt(0) - 13 : letter.charCodeAt(0) + 13;
            result += String.fromCharCode(leta);
        } else {
            //work with all other characters
            //they are withing the 97 - 122 range
            //if its higher than 122, subtract 13
            //add the formatted letter to the result
			      let leta = letter.charCodeAt(0) + 13 > 122 ? letter.charCodeAt(0) - 13 : letter.charCodeAt(0) + 13 ;
            result += String.fromCharCode(leta);
        }
    }
    return result;
}