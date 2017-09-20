function StringToArray(str){

	let temp=str.split(',')
	let temp1=[]

	for(let i=0;i<temp.length;i++){
		temp1[i]=temp[i].split('')
	}

	return temp1;
}

console.log(StringToArray("aqrst,ukaei,ffooo"))
console.log(StringToArray("qwer,tyui,asdf,ghjk"))