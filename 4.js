function stringParameterize(string){

  return string.replace(/ /g,"-").toLowerCase().replace(".","")
}
 console.log(stringParameterize("Robin Singh from USA."))
