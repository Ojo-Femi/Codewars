function sumStrings(a,b){
    let sum = [];
    if (b.length > a.length) {
        [a,b] = [b,a];
    }
	let carry = 0, add, temp = 0;
	let chara, charb, d;
    for (let i = 0; i < a.length; i++){
		chara = Number.parseInt(a.charAt(a.length - 1 - i));
		charb = Number.parseInt(b.charAt(b.length - 1 - i));
        d = Boolean(charb)? charb : 0;
		add = 0 + chara + d + temp;
		if (i === a.length - 1){
			sum.unshift(String(add));
        } else if (String(add).length > 1){
			sum.unshift(String(add).charAt(1));
			temp = Number(String(add).charAt(0));
        } else {
			sum.unshift(String(add).charAt(0));
			temp = 0;
        }
    }
	return sum.join('').startsWith('0') ? sum.join('').slice(1) : sum.join('');
}