function factorial(n){
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function probSimpson(lamb,x,op = '='){
    let res = 0;
	if(!op || op === '='){
		  return (Math.pow(lamb,x)*Math.pow(Math.E,-lamb))/factorial(x);
  }
  if (op === '>'){
    for (let i = 0; i < x; i++) {
    	res += probSimpson(lamb, i);
    }
    console.log(res);
    return Number(res.toFixed(14));
  }
	if (op === '>='){
    for (let i = 0; i <= x; i++) {
    	res += probSimpson(lamb, i);
    }
    console.log(res);
    return Number(res.toFixed(14));
  }
	if (op === '<'){
    	for (let i = 0; i <= x; i++) {
    		res += probSimpson(lamb, i);
    	}
      console.log( 1- res);
    return Number((1 - res).toFixed(14));
    }
	if (op === '<='){
    	for (let i = 0; i < x; i++) {
    		res += probSimpson(lamb, i);
    	}
      console.log(1 - res);

    return Number((1 - res).toFixed(14));
    }
}