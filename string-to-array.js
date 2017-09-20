function strToArr(str) {
  let arr = [];
  let splitStr = str.split(',');
  for (var r = 0; r < splitStr.length; r++) {
    let row = []
    for (var i = 0; i < splitStr[r].length; i++) {
      row.push(splitStr[r][i])
    }
    arr.push(row)
  }
  return arr;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));
