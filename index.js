function stringToArray(str) {

  // Split by commas
  let strArr = str.split(',');

  for (let i = 0; i < strArr.length; i++) {

    // Split all!
    strArr[i] = strArr[i].split('');

  }

  return strArr;

}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
