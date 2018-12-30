function duplicateEncode(word){
    // ...The world will respond to my code;
    let wordCopy = word.toLowerCase();
    let hashtable = {}; let result = "";
    for (let letter of wordCopy){
      hashtable[letter] == undefined ? hashtable[letter] = 1 : hashtable[letter] += 1;
    }
    for (let count of wordCopy){
    hashtable[count] === 1 ? result += "(" : result += ")";
    }
    return result;
}