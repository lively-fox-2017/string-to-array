function stringtoarray(str) {
  var arrstr = str.split(',')
  var arr = []

  for(var i = 0; i < arrstr.length; i++) {
    arr.push(arrstr[i].split(''))
  }

  return arr
}

console.log(stringtoarray('aqrst,ukaei,ffooo'));
console.log(stringtoarray('qwer,tyui,asdf,ghjk'));
