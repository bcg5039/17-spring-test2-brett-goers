const myArr = [1,1,1,3,4,5,6,7,4,3,4]
function checkDoubles(arf,art) {
    return arf === art;
}
function uniqueIt(arr){

  for(var x = 0;x<arr.length;x++){
   checkDoubles(myArr,arr[x])
  }
return arr.filter(checkDoubles)

}

console.log(uniqueIt(myArr))

// const R = require('ramda')
// const uniqueIt = arr => R.uniq(arr)
// console.log(uniqueIt([1, 1, 2, 1, 2, 3, 1]))
