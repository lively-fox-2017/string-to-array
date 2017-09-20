function StringToArray(str) {
  //Pecah string berdasarkan ','
  let splitStr = str.split(',');
  //siapkan tampung []
  let array = []
  //Looping str yang sudah dipisahkan
  for (let i = 0; i < splitStr.length; i++) {
  //push split string berdasarkan index yang sudah di split ''
    array.push(splitStr[i].split(''))
  }
  return array
}
//===============DRIVE CODE====================
console.log(StringToArray('aqrst,ukaei,ffooo'));
console.log(StringToArray('qwer,tyui,asdf,ghjk'));
