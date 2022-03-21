const bubbleSort = (arr) => {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
};

const array = [9, 5, 8, 1, 7];

bubbleSort(array);

console.log(array);
