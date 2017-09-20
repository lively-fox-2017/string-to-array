function stringToArray(str) {
  let splitted = str.split(",");
  let result = [];
  for (let i = 0; i < splitted.length; i++) {
    let col = splitted[i].split("");
    result.push(col);
  }
  return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
