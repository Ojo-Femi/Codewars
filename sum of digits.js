function digital_root(n) {
  // ...
    var nu = String(n);
	while(nu.length > 1){
        nu = String(nu.split('').reduce( (x,y) => Number(x) + Number(y)));
    }
	return Number(nu)
}