function scramble(str1, str2) {
 //code me
 let obj1 = {};
 
 for(var letter of str1){
    obj1[letter] = obj1[letter] === undefined ? 1 : obj1[letter]+= 1
 }
 for (let leta of str2){
     if (obj1[leta] === undefined || obj1[leta] <= 0){
         return false;
     } else {
         obj1[leta] -= 1;
     }
 }
    return true;
}