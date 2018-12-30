function  solution(str,arr){
  var regex = new RegExp('[' + arr.join('') + ']');
  str= str.split(regex);
  var ret = [];
  
  for (var i = 0; i < str.length; i++){
    if (i === 0){
      ret.push(str[i].trim())
      console.log(ret)
    } else {
      ret.push(str[i].slice(str[i].indexOf('\n')))
      console.log(ret)
    }
  }
  
  return ret.slice(0, ret.length - 1).join('').trim()
}