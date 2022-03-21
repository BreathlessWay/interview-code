const quickSort = (arr) => {
	if (arr.length < 2) return arr;

	let mid = arr[0],
		left = [],
		right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(mid, quickSort(right));
};


const array = [9, 5, 8, 1, 7];

console.log(quickSort(array));
