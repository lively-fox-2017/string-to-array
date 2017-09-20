'use strict';

function strToArr(str){
  let arr =[];
  let arrRow = str.split(',');
  for (let r=0;r<arrRow.length;r++){
    let row=[];
    for (let c=0;c<arrRow[r].length ; c++){
      row.push(arrRow[r][c]);
    }
    arr.push(row);
  }
  return arr;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));
