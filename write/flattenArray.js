const flattenArray = (arr) => {
	let result = [];

	arr.forEach(item => {
		if (Array.isArray(item)) {
			result = result.concat(flatten(item));
		} else {
			result.push(item);
		}
	});

	return result;
};


const data = flatten([[1, 2], [3, [4, 5], 6, [7, 8]], 9]);

console.log(data);
