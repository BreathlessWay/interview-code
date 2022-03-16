const flattenArray = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flattenArray(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}


	return result;
};

const flatArray = (arr) => {

	while (arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}

	return arr
};


const data = flatArray([[1, 2], [3, [4, 5], 6, [7, 8]], 9]);

console.log(data);
