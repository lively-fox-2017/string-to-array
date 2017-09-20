function stringToArray(str) {
	return str
			.split(',')
			.map(substr => substr.split(''));
}

console.log(stringToArray('aqrs,ukaei, ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));