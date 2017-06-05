var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortIt(arr){

  return arr.sort(function(a, b){return a-b})
}


console.log(sortIt(arr1))
