function generateBC(url, separator){
  console.log(url)
  var str = '';
  url = ignore(url);
  if (url.includes('//'))  url = url.slice(url.indexOf('//') + 2);
  if (url.indexOf('/') == url.length - 1) return '<span class="active">HOME</span>';
  else if(url.indexOf('/') === - 1) return '<span class="active">HOME</span>';
  url = url.split('/');
  if (check1(url)){
    url = url.slice(0, url.length - 1);
  }
  console.log(url)
  if(url.length === 1) return '<span class="active">HOME</span>';
  for (var i = 0; i < url.length; i++){
      if (i === 0){
        str += `<a href="/">HOME</a>${separator}`;
      } else if (i === url.length - 1) {
        //Put condition here
  	  let work = check2(url[i]).toLowerCase();
        str += `<span class="active">${check4(work)}</span>`;
      } else {
        str += `<a href="/${check3(url,url[i])}/">${check4(url[i])}</a>${separator}`;
      }
    }
    return str;
}

function ignore(url){
  return url.split(/[#?]/)[0];
}

function check1(url){
  if (url[url.length - 1].includes('index.')){
    return true
  }
  return false;
}

function check2(str){
  if (str.includes('.')){
    return str.slice(0, str.indexOf('.')).toUpperCase()
  }
  return str.toUpperCase()
}

function check3(url, str){
  var strr = '';
  for (var i = 1; i < url.length; i++){
    if (i === url.indexOf(str)){
      return strr += url[i];
    } else {
      strr += url[i] + '/'
    }
  }
}

function check4(str){
	if (str.length < 31 && str.includes('-')) return str.replace(/-/g, ' ').toUpperCase();
  if (str.length < 31) return str.toUpperCase();
    let ignore = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
	  let strr = str.split('-');
	  let ret = '';
    for (var i of strr){
      if (ignore.includes(i)){
        continue;
      } else{
        ret += i[0].toUpperCase();
      }
    }
  return ret;
}