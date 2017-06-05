const {split} = require('ramda')
const colorArray2 = ["black","green","blue","navy","orange","gold","purple"]

function upper(str){
  var newArr = str.split(',')
   //console.log(newArr)
  return newArr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
}
upper(colorArray2.toString())
console.log(upper(colorArray2.toString()))
