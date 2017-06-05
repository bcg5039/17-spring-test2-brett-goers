const R = require('ramda')
var student = {
  name : "David Ray",
  sclass : "VI",
  rollno : 12 }

function keysList(arr){


  return R.keys(arr).join(',')
}

console.log(keysList(student));
