R = require('ramda')
colorArray = ["black","green","blue","navy","orange","gold","purple"]
console.log("Before reverse")
console.log(colorArray)
console.log("After reverse")
console.log(R.reverse(colorArray))
//---------------------------------
//doing it another way
// const myArray = [
//   "black",
//   "green",
//   "blue",
//   "navy",
//   "orange",
//   "gold",
//   "purple"
// ]
// 
// function reverser () {
//   return myArray.reverse()
// }
//
// console.log(reverser())

//------now with ramda
// const R = require('ramda')
// const colorArr = ['black', 'green', 'blue', 'navy', 'orange', 'gold', 'purple']
// const reverse = inArr => R.reverse(inArr)
// console.log(reverse(colorArr))
