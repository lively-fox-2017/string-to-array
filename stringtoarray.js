'use strict'
function stringToArray(str){
let newStr1 = str.split(',');
let arr = [];
for(let i=0; i< newStr1.length; i++){
   arr.push(newStr1[i].split(""));
}
return arr;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
