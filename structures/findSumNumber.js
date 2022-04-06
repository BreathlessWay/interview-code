const findSumNumber = (arr, n, total) => {
	const result = [];
	const cycle = (array, count, res = []) => {
		for (let i = 0; i < array.length; i++) {
			if (count > 0) {
				cycle(array.slice(i), count - 1, [...res, array[i]]);
			} else {
				const sum = res.reduce((previousValue, currentValue) => previousValue + currentValue);
				if (sum === total) {
					result.push(res);
				}
			}
		}
	};

	cycle(arr.slice(0), n);

	return result;
};

console.log(findSumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 15));
