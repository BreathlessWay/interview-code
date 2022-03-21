const insertSort = (arr) => {
	const len = arr.length;
	for (let i = 1; i < len; i++) {
		let j = i,
			target = arr[j];
		while (j >= 0 && arr[j - 1] > target) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = target;
	}
};

const array = [9, 5, 8, 1, 7];

insertSort(array);

console.log(array);
