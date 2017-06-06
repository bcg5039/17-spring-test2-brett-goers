function first(arr,n){
 if(n === undefined){
   n = 1
 }
 if(n < 0){
   n = 0
 }
  return arr.slice(0,n);

}



console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
//-------------------------------
//another way to do it
//const R = require('ramda')

// function first (arr, n) {
//   if (n && n > 0) {
//     return R.take(n, arr)
//   } else if (n === undefined) {
//     return R.take(1, arr)
//   } else if (n < 0) {
//     return []
//   } else {
//     return []
//   }
// }
//
// console.log(first([ 7, 9, 0, -2 ]))
// console.log(first([], 3))
// console.log(first([ 7, 9, 0, -2 ], 3))
// console.log(first([ 7, 9, 0, -2 ], 6))
// console.log(first([ 7, 9, 0, -2 ], -3))
// 
// //Another way:-----------------------------------------
//
// const R = require('ramda')
// const first = function(arr, n){
//   n = n || 1
//   return n <= 0 || arr.length === 0 ? [] : R.take(n,arr)
// }
// console.log(first([7, 9, 0, -2]))
// console.log(first([],3))
// console.log(first([7, 9, 0, -2],3))
// console.log(first([7, 9, 0, -2],6))
// console.log(first([7, 9, 0, -2],-3))
