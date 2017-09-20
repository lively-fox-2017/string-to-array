'use strict'

function stringToArray(strings){
    let arr = [];
    let row = 0;
    for(let i = 0 ; i < strings.length; i++){
        
        if(i === 0){
            arr.push([]);
        }

        if(strings[i] !== ','){
            arr[row].push(strings[i]);
        }else{
            arr.push([]);
            row++;
        }
    }

    return arr;
}

console.log(stringToArray("aqrst,ukaei,ffooo"))


