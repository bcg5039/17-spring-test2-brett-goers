function unionIt(arr1,arr2){

  return arr1.concat(arr2)
}

console.log(unionIt([1, 2, 3], [100, 2, 1, 10]));
//--------------------------------------------------
//another way to do this

// const { union } = require('ramda')
//
// var myArrOne = [ 1, 2, 3, 4, 5 ]
// var myArrTwo = [ 4, 5, 6, 7 ]
//
// function unionIt (arr1, arr2) {
//   return union(arr1, arr2)
// }
// console.log(unionIt(myArrOne, myArrTwo))
