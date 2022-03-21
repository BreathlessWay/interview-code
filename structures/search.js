const search = (arr, target, start = 0, end = arr.length - 1) => {
	const mid = Math.floor((end + start) / 2);

	if (arr[mid] === target) {
		return mid;
	}

	if (start >= end) {
		return -1;
	}

	if (target > arr[mid]) {
		return search(arr, target, mid + 1, end);
	} else {
		return search(arr, target, start, mid - 1);
	}
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(search(arr, 4));
