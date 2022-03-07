const flattenArray = (arr) => {
	let result = [];

	arr.forEach(item => {
		if (Array.isArray(item)) {
			result = result.concat(flattenArray(item));
		} else {
			result.push(item);
		}
	});

	return result;
};

const flatArray = (arr) => {

	while (arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}

	return arr;
};


const data = flatArray([[1, 2], [3, [4, 5], 6, [7, 8]], 9]);

console.log(data);
