function stringToArray(str){
	let arr1 = str.split(",");
	let arrHasil = [];
	
	for(let i=0;i<arr1.length;i++){
		let arr2 = arr1[i].split("");
		arrHasil.push(arr2);
	}
	
	return arrHasil;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));