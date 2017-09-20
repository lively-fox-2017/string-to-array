let createArray = (str) => {
	var arrstr = [];
	var newstr = str.split(',');
	for (var i = 0; i < newstr.length ; i++) {
			arrstr.push(newstr[i].split(''));
	}
	return arrstr;
}

console.log(createArray('aaaaa,bbbbb,ccccc'));