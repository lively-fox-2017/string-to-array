function stringToArr(str){

    let split = str.split(',')
    let arr = []
    for(var i = 0; i < split.length; i++){
        arr.push(split[i].split(''))
    }
    return arr

}

console.log(stringToArr('aqrst,ukaei,ffooo'))