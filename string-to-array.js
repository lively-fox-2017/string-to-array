"use strict"
function stringToArray(sen){
  sen = sen.split(',');
  var senArr = [];

  for (let i = 0; i < sen.length; i++) {
    senArr.push(sen[i].split(''))
  }

  return senArr;

}

console.log(stringToArray('aqrst,ukaei,ffooo'));
