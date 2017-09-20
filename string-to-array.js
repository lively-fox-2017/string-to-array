function arrayDua(str){
	let arr = str.split(',');
	let temp = [];
	for(let i=0;i < arr.length;i++){
		temp.push([])
		for(let j=0;j<arr[i].length;j++){
			temp[i].push(arr[i][j])
		}
	}
	return temp
}
console.log(arrayDua('aqrst,ukaei,ffooo'))
console.log('=================================')
console.log(arrayDua('qwer,tyui,asdf,ghjk'))