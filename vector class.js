function Vector (components) {
  // TODO: Finish the Vector class.
  this.arr = components;
  this.add = add;
  this.subtract = subtract;
  this.dot = dot;
  this.norm = norm;
  this.equals = equals;
  this.toString = toString;
};
function add(ar) {
  if (this.arr.length === ar.arr.length){
    let result = [];
    for (var i = 0; i < ar.arr.length; i++){
      result.push(this.arr[i] + ar.arr[i]);
    }
    return new Vector(result);
    } else{
      throw ('sorry, arrays cannot be added');
    }
}

function subtract(ar){
  if (this.arr.length === ar.arr.length){
    let result = [];
    for (var i = 0; i < ar.arr.length; i++){
      result.push(this.arr[i] - ar.arr[i]);
    }
    return new Vector(result);
    } else{
      throw ('sorry, arrays cannot be subtracted');
    }
}

function dot(ar){
  if (this.arr.length === ar.arr.length){
    let result = [];
    for (var i = 0; i < ar.arr.length; i++){
      result.push(this.arr[i] * ar.arr[i]);
    }
    return result.reduce( (a,b) => a+b);
    } else{
      throw ('sorry, arrays cannot be multiplied');
    }
}

function norm(){
    var well = this.arr.map( x => Math.pow(x,2)).reduce( (a,b) => a+b)
    return Math.sqrt(well);
}

function equals(b){
    if(this.arr.length === b.arr.length){
      let result = [];
      for (var i = 0; i < b.arr.length; i++){
          if (this.arr[i] !== b.arr[i]){
            return false;
            }
        }
       return true;
}
}
function toString(){
    return `(${this.arr.join()})`;
}