'use strict';

function stringToArray(str){

	let array = str.split(',');
	let row = [];

	for(let i = 0; i < array.length; i++){
		row.push(array[i].split(''))
	}



	return row
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,ghjk'))