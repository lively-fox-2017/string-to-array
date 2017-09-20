function stringToArr(stringWithComma){
  'use strict'
  var arrOfString = stringWithComma.split(',');
  var result=[];
  var index =0;
  for (let string of arrOfString) {
    result.push([]);
    for (let char of string.split('')) {
      result[index].push(char);
    }
    index++;
  }
  return result;
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
