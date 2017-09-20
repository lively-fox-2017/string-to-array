'use strict'

function stringToArray(input) {
  let str = input.split(',');
  let str2 = [];
  for (var i = 0; i < str.length; i++) {
    str2.push(str[i].split(''));
  }
  return str2;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
