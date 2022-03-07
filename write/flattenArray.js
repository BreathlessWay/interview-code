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


const data = flattenArray([[1, 2], [3, [4, 5], 6, [7, 8]], 9]);

console.log(data);
