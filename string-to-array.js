function stringToArray(str) {
	return str
			.split(',')
			.map(substr => substr.split(''));
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));