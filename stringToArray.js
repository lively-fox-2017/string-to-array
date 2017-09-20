function stringToArray(str){
  let newStr=str.split(','),result=[];
  for (var i = 0; i < newStr.length; i++) {
    result.push(newStr[i].split(''))
  }
  return result;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
