function stringToArray(str) {
    // console.log(str.split(','));
    let pecah = str.split(',');
    // console.log(pecah[0].length)
    let hasil = [];
    for (var a = 0; a < pecah.length; a++) {
        let row = [];
        for (var b = 0; b < pecah[a].length; b++) {
            row.push(pecah[a][b])
        }
        hasil.push(row);
    }
    return hasil;

}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));