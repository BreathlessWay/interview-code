const selectSort = (arr) => {
	let len = arr.length,
		midIndex;

	for (let i = 0; i < len - 1; i++) {
		midIndex = i;
		for (let j = i; j < len; j++) {
			if (arr[j] < arr[midIndex]) {
				midIndex = j;
			}
		}
		if (midIndex !== i) {
			[arr[i], arr[midIndex]] = [arr[midIndex], arr[i]];
		}
	}
};

const array = [9, 5, 8, 1, 7];

selectSort(array);

console.log(array);
