function stringToArray(str){
  let pisahKoma=str.split(',')
  // console.log(pisahKoma);
  var temp=[]

  for(let i=0;i<pisahKoma.length;i++){
    let pisahPetik=pisahKoma[i].split('')
    // console.log(pisahPetik);
    temp.push(pisahPetik)
  }
return temp
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log('---------------------------------');
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
