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

const flatReduce = (arr, deep = 1) => {
	return arr.reduce((pre, next) => {
		if (Array.isArray(next) && deep > 1) {
			return pre.concat(flatReduce(next, deep - 1));
		}else {
			return pre.concat(next)
		}
	}, []);
};

const data = flatReduce([[1, 2], [3, [4, [3, 3, 3], 5], 6, [7, 8]], 9]);

console.log(data);
