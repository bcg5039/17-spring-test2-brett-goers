function search_word(string,findMe){
const newArr = string.replace(',',' ').split(' ')
//console.log(newArr)
 var findMeCount = 0
for(var x = 0; x < string.length;x++){
  if(newArr[x] === findMe){
    findMeCount++
  }
}
return  `'${findMe}' was found ${findMeCount} times.`
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
//---------------------------------------------------------
//another example
// const R = require('ramda')
// const search_word = function(inStr, keyWord){
//   return `'${keyWord}' was found ${R.match(RegExp(keyWord, 'g'), inStr).length} times`
// }
// console.log(search_word('The quick brown fox', 'fox'))
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
