function formatWords(arrr){
  if (!arrr || arrr.length === 0) return '';
    let result = '';
	let arr = arrr;
  if (arrr[0] !== undefined) {
	if (arrr.length > 0){
    if ( arrr.includes('')){
		arr = arrr.filter( x => x !== '');
    }
    }
}
	if (arrr.length === 0) {
		return '';
  	} else if (arrr.length === 1) {
		return arrr[0];
  	} else if (arr.length === 1) {
		return arr[0];
    } else {
    for (var i = 0; i < arr.length; i++){
        if (i === arr.length - 1){
			result += `and ${arr[i]}`;
        } else if (i === arr.length - 2){
			result += `${arr[i]} `;
        } else if (arr[i] === ''){
            continue;
        } else {
            result += arr[i] + ', ';
        }
    }
       return result;
    }
}