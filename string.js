// Fungsi untuk memberikan satu huruf secara random
function randomAlph () {
    var text =''
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return	text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// console.log(randomAlph())
// Fungsi untuk membuat Nested Array
let createNestedArr = (rows, cols) => {
	let arr = [];
	for (let i = 0; i < rows; i++) {
		arr.push([]);
		for (let j = 0; j < cols; j++) {
			arr[i].push(randomAlph());
		}
	}
	return arr;
}

console.log(createNestedArr(3,5))