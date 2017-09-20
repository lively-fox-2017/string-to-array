function stringToArray(str){
  let splitStr = str.split(',');
  let bigArray = [];

  for (var i = 0; i < splitStr.length; i++){
    // let row = [];
    // for (var j = 0; j< splitStr[i].length; j++){
    //   row.push(splitStr[i][j]);
    // }
    // bigArray.push(row);
    bigArray.push(splitStr[i].split(''));
  }

  console.log(bigArray);

}


(stringToArray("aqrst,ukaei,ffooo"));
(stringToArray("qwer,tyui,asdf,ghjk"));
