function stringToArray(str){
  let arr= str.split(',')
  let strToArr=[]
  arr.map(isiArr =>{
    return strToArr.push(isiArr.split(''))
  })
  // for (var i = 0; i < arr.length; i++) {
  //   strToArr.push(arr[i].split(''))
  // }
  return strToArr;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
