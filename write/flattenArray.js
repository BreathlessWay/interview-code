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

	return arr;
};

const flatReduce = (arr, deep = 1) => {
	return arr.reduce((pre, current) => {
		if (Array.isArray(current) && deep > 1) {
			return pre.concat(flatReduce(current, deep - 1));
		} else {
			return pre.concat(current);
		}
	}, []);
};

const data = flatArray([[1, 2], [3, [4, [3, 3, 3], 5], 6, [7, 8]], 9]);

console.log(data);
