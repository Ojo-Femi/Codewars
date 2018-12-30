function createReport(firstArray){
// your code. My code allright
let name = [];
for (let fame of firstArray) {
  let game = fame.replace(/ +/g, ' ').replace(/-/g,' ');
  name.push(game);
}
let result = [];
let dictionary = {};
let finalResult = [];
for (let bar of name){
  bar.replace(/ +/g, ' ');
}
console.log(name)
for(let bar of name){
if (bar.includes('Labrador')){
  return ['Disqualified data'];
}
}
for (var named of name){
  let arr = [named.substring(0, named.lastIndexOf(' ')), Number(named.substring(named.lastIndexOf(' ')+1))];
  dictionary[arr[0]] = dictionary[arr[0]] == undefined ? arr[1] : dictionary[arr[0]] += arr[1];
}
console.log(dictionary);
for (let sorted in dictionary){
  result.push([sorted, dictionary[sorted]])
}
result.sort();
console.log(result);
    for (var tes of result){
        let worker1 = '', worker2;
        if (tes[0].includes(' ')){
            worker2 = tes[0].split(' ');
            worker1 = worker2.length == 2 ? worker2[0].substring(0,3).toUpperCase() + worker2[1].substring(0,3).toUpperCase() : worker2.length == 3 ? worker2[0].substring(0,2).toUpperCase() + worker2[1].substring(0,2).toUpperCase() + worker2[2].substring(0,2).toUpperCase() : worker2[0][0].toUpperCase() + worker2[1][0].toUpperCase() + worker2[2].substring(0,2).toUpperCase() + worker2[3].substring(0,2).toUpperCase();
            tes[0] = worker1;
        } else{
            tes[0] = tes[0].substring(0,6).toUpperCase();
        }
        finalResult.push(...tes);
    }
    console.log(name,finalResult);
    return finalResult
}