function text_truncate(string,length,flare){
if (flare === undefined){
  flare = ""
}
return string.substring(0,length) + flare
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 15))
console.log(text_truncate('We are doing JS string exercises.', 12, '!!'));
//----------------------------------other ways to do it
//
// function truncate (value, length, sequence) {
//   const truncatedSequence = sequence ? sequence : "..."
//   ...
// }


// function truncate (value, length, sequence) {
//   const truncatedSequence = sequence ? sequence : "..."
//   const returnValue = length ? value.substring(0,length) + truncatedSequence : value
//   return returnValue
// }
// const text_truncate = function(inStr, len, end){
//       len = len || inStr.length
//       end = end || '...'
//       return inStr.length<=len ? inStr : inStr.substring(0,len)+end
//  }
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.', 15))
// console.log(text_truncate('We are doing JS string exercises.', 12, '!!'))
