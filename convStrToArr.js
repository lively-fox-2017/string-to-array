function convStrToArr(input) {
    let char = input.split(',')
        //let char = input.split('')
        //console.log(char)
    let hasil = []
    for (let r = 0; r < char.length; r++) {
        let row = []
            //console.log(char[r]);
        for (let c = 0; c < char[0].length; c++) {
            //console.log(char[c]);
            row.push(char[r][c])
        }
        hasil.push(row)
    }
    return hasil

}

//convStrToArr('aqrst,ukaei,ffooo')
//convStrToArr('qwer,tyui,asdf,ghjk')
//console.log(convStrToArr('aqrst,ukaei,ffooo'))
console.log(convStrToArr('qwer,tyui,asdf,ghjk'))