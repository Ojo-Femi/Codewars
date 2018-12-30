function divisors(num){
    let count = 0;
    let arr = [];
    if (num === 0) {
        throw Error('Please return a number higher than 0');
    }
    for (i = count +1; i <= num; i++){
        if (num%i === 0){
            arr.push(i);
        }
    }
    var reduced = arr.map( x => x*x).reduce( (a,b) => a+b);
    var red = Math.sqrt(reduced) === Math.floor(Math.sqrt(reduced));
    return red ? reduced : false;
}

function listSquared(m, n) {
    // your code
    let arr = [];
    for (var i = m; i <= n; i++){
      if (divisors(i)){
        arr.push([i,divisors(i)]);
      }
    }
    return arr;
}