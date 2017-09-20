function sta(string){
  var arr = string.split(',')

  var hasil = [];
  for(var i = 0; i < arr.length; i++) {
    var temp = arr[i]
    var split = temp.split('')
    var len = temp.length
    var dalam = [];
    for(var j = 0; j < len; j++){
      dalam.push(split[j])
    }
    hasil.push(dalam)
  }
  return hasil
}
console.log(sta("aqrst,ukaei,ffooo"))
