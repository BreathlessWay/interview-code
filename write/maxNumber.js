const maxNumber = (arr) => {
	if (arr.length) {
		return arr.reduce((pre, next) => {
			return pre > next ? pre : next;
		});
	}
	return null;
};

console.log(maxNumber([9, 4, 6]));

const max2Number = (arr) => {
	if (arr.length > 1) {
		let max1, max2;
		if (arr[0] > arr[1]) {
			max1 = arr[0];
			max2 = arr[1];
		} else {
			max1 = arr[1];
			max2 = arr[0];
		}
		for (let i = 2; i < arr.length; i++) {
			const item = arr[i];
			if (item > max1) {
				max2 = max1;
				max1 = item;
			}
			if (item < max1 && item > max2) {
				max2 = item;
			}
		}
		return [max1, max2];
	}
	if (arr.length === 1) {
		return arr;
	}
	return null;
};

console.log(max2Number([3, 2, 5, 8]));
