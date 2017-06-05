function text_truncate(string,length,flare){
if (flare === undefined){
  flare = ""
}
return string.substring(0,length) + flare
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 15))
console.log(text_truncate('We are doing JS string exercises.', 12, '!!'));
