function convertToArr(str){
  var inputArray = str.split(',');
  var result = [];
  for(var i =0;i<inputArray.length;i++){
    var temp = [];
    for(var j=0;j<inputArray[i].length;j++){
      temp.push(inputArray[i][j]);
    }
    result.push(temp)
  }
  return result;
}

console.log(convertToArr("aqrst,ukaei,ffooo"));
console.log(convertToArr("qwer,tyui,asdf,ghjk"));
