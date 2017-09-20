function strToArr (str){
    let newArr = str.split(',');
    //console.log(newArr)
    let temp = [];
    // row
    for(var i = 0; i < newArr.length; i++){
        temp.push(newArr[i].split(''));
    }
    return temp;
}
console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));