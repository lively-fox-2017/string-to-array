function stringArray(str) {
  var str = str.split(",")
  var tampung = []
  //console.log(str.length);

  for (var i = 0; i < str.length; i++) {
      tampung.push(str[i].split(""))
  }
  return tampung;
}

console.log(stringArray("aqrst,ukaei,ffooo"));
