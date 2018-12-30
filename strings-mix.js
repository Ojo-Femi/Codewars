function mix(s1, s2) {
  // your code
  console.log(`s1: ${s1}\ns2: ${s2}`)
  //Define hashtables and needed variables
  let obj1 = {}, obj2 = {}, arr = [];
  
  //Push those variables into the objects for counting purposes
  s1.split('').filter( x => x.charCodeAt(0) > 96)
              .map( x => obj1[x] === undefined ? obj1[x] = 1 : obj1[x] += 1 );
  s2.split('').filter( x => x.charCodeAt(0) > 96)
              .map( x => obj2[x] === undefined ? obj2[x] = 1 : obj2[x] += 1 );
  
  //find the maximum for each character
  for (var i in obj1){
    //check if they exist in both, and its greater than one.
    //If they do, make the necessary adjustments
    if (obj1[i] !== 1){
      //If they are equal, add '=:', if s1 is more, add '1:', else add '2:'
      let see = obj1[i] === obj2[i] ? '=:' + String(i).repeat(obj1[i]) : obj2[i] === undefined ? '1:' + String(i).repeat(obj1[i]) : obj1[i] > obj2[i] && obj2[i] !== undefined? '1:' + String(i).repeat(obj1[i]) : '2:' + String(i).repeat(obj2[i]);
      arr.push(see);
    }
  }
	for (var i in obj2){
	  
	  //check if they exist in both, and its greater than one.
    //If they do, make the necessary adjustments
    if (obj2[i] !== 1){
      //If they are equal, add '=:', if s1 is more, add '1:', else add '2:'
      let see = obj1[i] === obj2[i] ? '=:' + String(i).repeat(obj1[i]) : obj1[i] === undefined ? '2:' + String(i).repeat(obj2[i]) : obj1[i] > obj2[i] && obj2[i] !== undefined ? '1:' + String(i).repeat(obj1[i]) : '2:' + String(i).repeat(obj2[i]);
      if (!arr.includes(see)) arr.push(see);
    }
  }
    return arr.sort( (c,d) => {
      if (c.length > d.length) return -1;
      if (c.length < d.length) return 1;
      if (c[0].charCodeAt(0) < d[0].charCodeAt(0)) return -1;
      if (c[0].charCodeAt(0) > d[0].charCodeAt(0)) return 1;
    	if (c[2].charCodeAt(0) > d[2].charCodeAt(0)) return 1;
  	  if (c[2].charCodeAt(0) < d[2].charCodeAt(0)) return -1;
    }).join('/');
}