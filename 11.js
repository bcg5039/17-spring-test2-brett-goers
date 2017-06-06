const R = require('ramda')
var student = {
  name : "David Ray",
  sclass : "VI",
  rollno : 12 }

function keysList(arr){


  return R.keys(arr).join(',')
}

console.log(keysList(student));

//--------------------------------------------------
//another way to do this
// const R = require('ramda')
// var student = { name : "David Ray", sclass : "VI", rollno : 12 }
//
// const keysList2 = inObj => R.compose(
//   R.join(','),
//   R.keys
// )
//
// console.log("calling keysList2", keysList2(student))
