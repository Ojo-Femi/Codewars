function meeting(s) {
    // your code
    s = s.toUpperCase();
    let arr = s.split(';').map( x => {
        let a = x.split(':');
        [a[0], a[1]] = [a[1], a[0]];
		return a;
    }).sort();
    let result = "";
    result += arr.map( x => "(" + x.join(', ') + ")").join('');
    return result;
}