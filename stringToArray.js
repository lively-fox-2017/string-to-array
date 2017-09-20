function stringToArray(str){
	var pisah = str.split(",");
	var kosong = [];
	// console.log(pisah);
	for(var r = 0; r < pisah.length; r++){
		// console.log(pisah[r]);
		// console.log(r);
		kosong.push(pisah[r].split(""))
	}
	// console.log(kosong);
	return kosong;
}
console.log(stringToArray("awwfa,dwadd,dwada"))