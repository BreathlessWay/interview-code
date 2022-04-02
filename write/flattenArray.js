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
	return arr.reduce((pre, current) => {
		if (Array.isArray(current) && deep > 1) {
			pre = pre.concat(flatReduce(current), deep - 1);
		} else {
			pre = pre.concat(current);
		}
		return pre;
	}, []);
};

const data = flatReduce([[1, 2], [3, [4, [3, 3, 3], 5], 6, [7, 8]], 9]);

console.log(data);
